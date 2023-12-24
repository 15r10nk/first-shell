import random
from textual.screen import Screen
from textual.widgets import Static
from textual.reactive import reactive
from textual.app import App
from textual.color import Color

from rich.text import Text
import math
from .say import say


class Tree(Static):
    dark_candles = reactive(5)

    def __init__(self):
        tree = """
                   ▂
            ▁▂▃▄i▆▇█
            X  ▁▂▅██
        ▁▂▃▄▅i▇~█~█~
           X ▂▃▅▆▇██
      ▁▂▃▄▅i▇~█~█~█~
        X   ▁▂▃▅▆I██
    ▁▂▃▄▅i▇~█~█~█~█~
     X  X ▁▂▃▄▅▆I███
   ▁▂▄▅i▇~█~█~█~█~█~
     X   ▁▂i▄▆██████
  ▁▂▃▅i▇~█~█~█~█~I~█
                   S
                  SS
        """

        self.tree_data = "\n".join(line + line[::-1] for line in tree.splitlines())

        self.candles = [
            (x, y) for y, line in enumerate(self.tree_data.splitlines()) for x, c in enumerate(line) if c in "iI"
        ]

        self.candle_order = list(range(len(self.candles)))
        random.shuffle(self.candle_order)

        super().__init__()

    def render(self):
        tree_color = "#138638"
        candle_color = "white"

        rand = random.Random(0)

        t = {
            "i": lambda: f"[{candle_color}]:candle:[/]",
            "~": lambda: f"[red on {tree_color}]~[/]",
            "I": lambda: f"[{candle_color} on {tree_color}]:candle:[/]",
            "X": lambda: rand.choice(
                [
                    "[yellow]:glowing_star:[/]",
                    "[yellow]:bell:[/]",
                    "[blue]:socks:[/]",
                    "[white]:cookie:[/]",
                ]
            ),
            "S": lambda: "[#663300]█[/]",
            **{c: lambda c=c: f"[{tree_color}]{c}[/]" for c in "▁▂▃▄▅▆▇█"},
        }

        dark = Color.parse("#003300")
        light = Color.parse("#4C9900")

        light_width = 3

        def dist(a, b):
            return math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)

        candles = [self.candles[i] for i in self.candle_order[self.dark_candles :]]

        skip = False

        new_tree = ""
        for y, line in enumerate(self.tree_data.splitlines()):
            for x, c in enumerate(line):
                if skip:
                    skip = False
                    continue
                if c != " ":
                    p = (x, y)
                    level = min(5, sum(light_width - min(dist(p, lp), light_width) for lp in candles))
                    tree_color = dark.blend(light, level / 5).hex
                    candle_color = "yellow" if p in candles else "darkgrey"
                new_tree += t.get(c, lambda: c)()
                if c == "X":
                    skip = True
            new_tree += "\n"

        return new_tree


class Word(Static):
    word = reactive("")
    guessed = reactive(set())
    wrong = reactive(0)

    current_word = reactive("")

    def compute_wrong(self):
        return len(self.guessed - set(self.word))

    def compute_current_word(self):
        return "".join(c if c in self.guessed else "_" for c in self.word)

    def render(self):
        all_letters = "abcdefghijklmnopqrstuvwxyz".upper()

        all_letters = " ".join(
            f"[#808080]{c}[/]" if c not in self.guessed else f"[green]{c}[/]" if c in self.word else f"[red]{c}[/]"
            for c in all_letters
        )

        result = "".join(f"[green]{c.upper()}[/]" if c in self.guessed else "_" for c in self.word)

        return all_letters + "\n\n    " + result + " ?" 


class XMas(Screen):
    def compose(self):
        yield Tree()
        yield Word()

    def on_key(self, event):
        word = self.query_one(Word)
        if event.is_printable:
            word.guessed = word.guessed | {event.key.upper()}

            if event.key.upper() not in word.word:
                say("kein "+event.key)

        if "_" not in word.current_word and event.name == "enter":
            self.reset()

    def reset(self):
        word = self.query_one(Word)
        word.word = random.choice(["Ronja", "Mama", "Papa", "Opa", "Oma", "Linda", "Marie", "Melinda"]).upper()
        word.guessed = set()

    def on_mount(self):
        def assign(v):
            self.query_one(Tree).dark_candles = v

        self.watch(self.query_one(Word), "wrong", assign)

        def changed(word):
            if "_" in word:
                say(word.replace("_", " "))
            elif word:
                say(f'sehr gut, {word} ist richtig')

        self.watch(self.query_one(Word), "current_word", changed)

        self.reset()

class TestApp(App):
        SCREENS = {"xmas": XMas()}
        CSS_PATH = "first_shell.tcss"

        def on_mount(self):
            self.push_screen("xmas")

if __name__ == "__main__":


    TestApp().run()
