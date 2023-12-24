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

from .xmas import XMas

from .say import say,setup

import subprocess as sp

#setup()


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

    SCREENS={"xmas":XMas()}

    def compose(self):
        yield ScrollableContainer(Prompt())


    async def on_input_submitted(self,event):
        say(event.value)
        cmd=event.value.lower().strip()
        if cmd=="xmas":
            self.push_screen("xmas")
            return
        if cmd=="update":
            result=sp.run("python -m pip install -U first-shell".split(),capture_output=True)
            p=HistoryEntry((result.stdout+result.stderr).decode())
        else:
            p=HistoryEntry(event.value)
        
        scroll_container=self.query_one(ScrollableContainer)
        
        scroll_container.mount(p,before=self.query_one(Prompt))
        self.query_one(Prompt).query_one(Input).value=""
        scroll_container.scroll_end()

    async def on_mount(self):
        await sleep(0.01)
        self.query(Input).last().focus()




if __name__=="__main__":
    shell=FirstShell()
    shell.run()


