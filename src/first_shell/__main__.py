import sys, tty, termios

from gtts import gTTS
import hashlib
import pathlib
import vlc
import os

os.environ["VLC_VERBOSE"] = "-1"
player = vlc.MediaPlayer()

symbols = {
    "*": "mahl",
    "/": "durch",
    "=": "ist",
    "+": "plus",
    "-": "minus",
    "(": "klammer auf",
    ")": "klammer zu",
}
from functools import lru_cache
from tempfile import NamedTemporaryFile, TemporaryFile

from textual.app import App
from textual import events
from textual.widgets import Input,Footer,Static,ListItem,ListView
from textual.containers import ScrollableContainer,Horizontal
from textual.binding import Binding
from asyncio import sleep
from gtts import gTTS
from io import BytesIO
from pydub import AudioSegment
import simpleaudio

@lru_cache()
def text_to_mp3(text):
    tts = gTTS(text=text, lang="de", slow=False)
    mp3_fp = BytesIO()
    tts.write_to_fp(mp3_fp)
    mp3_fp.seek(0)
    mp3_audio = AudioSegment.from_file(mp3_fp, format="mp3")

    wav_data = BytesIO()
    mp3_audio.export(wav_data, format="wav")
    
    return wav_data


current_play=None

def say(text):
    global current_play
    if not text:
        return

    from time import sleep



    print(text)

    for sym, name in symbols.items():
        text = text.replace(sym, f" {name} ")

    if current_play is not None:
        current_play.stop()

    data=text_to_mp3(text)
    data.seek(0)
    wave_obj = simpleaudio.WaveObject.from_wave_file(data)
    current_play = wave_obj.play()

for l in "abcdefghijklmnopqrstuvwxyz":
    print(l)
    text_to_mp3(l)
    text_to_mp3(l.upper())


class FInput(Input):

    def __init__(self,**args):
        self.old_value=""
        super().__init__(**args)

    def on_input_changed(self,new_input):
        self.value=new_input.value.upper()
        if self.old_value and self.old_value[-1]!=" " and self.value and self.value[-1] == " ":
            say(self.value.split()[-1])
        self.old_value=self.value

    def on_key(self,event:events.Key):
        if len(event.key)==1:
            say(event.key)

class Prompt(Static):


    def compose(self):
        yield Static(">")
        yield FInput(id="text")

    def on_mount(self):
        print("mounted")
        self.focus()

class HistoryEntry(Static):
    
    def __init__(self,text):
        self.text=text
        super().__init__()

    def compose(self):
        yield Static(">")
        yield Static(self.text,id="text")


class FirstShell(App):
    CSS_PATH="first_shell.tcss"


    def compose(self):
        yield ScrollableContainer(Prompt())
        yield Footer()


    async def on_input_submitted(self,event):
        say(event.value)
        p=HistoryEntry(event.value)
        self.query_one(ScrollableContainer).mount(p,before=self.query_one(Prompt))
        self.query_one(Prompt).query_one(Input).value=""

    async def on_mount(self):
        await sleep(0.01)
        self.query(Input).last().focus()




if __name__=="__main__":
    shell=FirstShell()
    shell.run()


