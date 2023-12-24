
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
    if not text.strip():
        return


    print(text)

    for sym, name in symbols.items():
        text = text.replace(sym, f" {name} ")

    if current_play is not None:
        current_play.stop()

    data=text_to_mp3(text)
    data.seek(0)
    wave_obj = simpleaudio.WaveObject.from_wave_file(data)
    current_play = wave_obj.play()



def setup():
  for l in "abcdefghijklmnopqrstuvwxyz":
    print(l)
    text_to_mp3(l)
