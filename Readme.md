# ******** Bingo Seed Scraper Instructions **********
  This tool is a command line Javascript program used to
search through all valid seeds of the bingo boards
generated on bingosync.com for both Wii Sports and
Wii Sports Resort. This program will let the user select
which game and bingo style to search (Wii Sports, Wii
Sports Resort Normal, or Wii Sports Resort Stamps),
whether to look for single or triple bingo matches,
which tasks from the full option list they want on
their bingo board, and whether they want to search
for only the first matching seed or find all matches.
The program will search through all possible seeds
as defined by bingosync.com (0 to 2147483647) for
a bingo card that contains a bingo with only the
user-selected options.

## ********** Setup to Run this Program ************
### NOTE: I have only tested this on Windows 10, so I cannot speak to any differences on other operating systems or whether this code even works. Search for ways to run javascript programs on your desired operating system if you encounter problems.

To run this program, the user will need to install Node.js
to run javascript programs from the command line. This
is a free software found at https://nodejs.org/en/download.
After downloading the installer, run through the installation
and select all default options. After that, you should be able
to run this program.

After installing Node, open up your command prompt (either
search for it in the Start menu search bar or press Win-R
and type cmd in the textbox that pops up). Once the command prompt
is open, all you need to do is type the following command and click enter:

node "[full folder path the .jsx file is saved in]\Bingo Seed Scraper.jsx"
(Example: node "C:\Users\your.name\Downloads\Bingo Seed Scraper.jsx")

## ********** Running this Program ************
  After entering the command, the program will start running and
will prompt you to enter the following information in order:

### %%% Q1 %%%
Which Bingo Board type do you want to search?

1: Wii Sports Normal (default)
2: Wii Sports Resort Normal
3: Wii Sports Resort Stamps

Enter the number corresponding with your desired choice (if you enter
anything else, it will default to Wii Sports).

### %%% Q2 %%%
#### Do you want to search single or triple bingo?

1: Single (default)
3: Triple

Enter the number corresponding with your desired choice (if you enter
anything else, it will default to Single Bingo).

### %%% Q3 %%%
##### The program will print the full list of all possible options for the bingo list you selected in Q1 in numbered order (starting with 0). The program will then print this prompt:

#### Enter the tasks you want to find in your bingo(s). Use the numbers for each item listed above and separate them with only commas, no spaces. e.g. 13,44,2,65,23
##### Note: You must have a minimum of 5 items for single bingo and a minimum of 12 for triple bingo.

You should enter a full list of the numbers corresponding with your
desired options to have in the bingo(s). I have not tested this code
with incorrect formatting, so make sure to use the correct format for
this list. The order of the numbers does not matter, but make sure to
separate them only by commas with no spaces. If you do not enter enough
items (<5 for single bingo or <12 for triple), the program will clear
your choices and re-prompt you to enter your choices. Note: you can search
for more than the minimum number of options, the program will flag any
seeds that contain any combination of your choices in a bingo or triple
bingo. This is especially suggested for triple bingo because it is much
more difficult to find a match as compared to single bingo, and not every
combination of options exists in the limited number of seeds bingosync allows.

### %%% Q4 %%%
#### Would you like to find all possible seeds or stop after finding the first?

0: Find all matching seeds (default)
1: Find First Only

Enter the number corresponding with your desired choice (if you enter
anything else, it will default to finding all matching seeds). I would
recommend using the first only if you are looking for single bingo and
finding all for triple bingo. Because you are likely having more options
than necessary in triple bingo, it helps to get different variants that
use different combinations, whereas for single bingo you will likely find
any combination of 5 you want, so you can afford to only find the specific
combo you want and stop once done.

After entering all your choices, the program will start searching seeds. It
prints out a message every 2,000,000 seeds (this can be edited by changing
the printRate variable on the 6th line of the code) to show the program is
progressing and hasn't frozen. It also prints the number of successes it
has found to that point to let you know if there are any matches that have
since scrolled off-screen. The program will continue running until it has
searched every valid seed (unless the user has chosen to quit after the first
match, in which case it will run until it finds a successful match if there
is one). At any time, you can stop the program by X-ing out of the command
prompt or pressing Ctrl-C. WARNING: Despite my best efforts to minimize the
number of calculations this program must do to max out the speed, this program
must search 12 possible bingos for over 2 billion seeds, so this process
can easily take multiple hours. Depending on your computer's strength you
may have faster times, but to run through the entire seed list took my computer
over 12 hours. If you are a coder who understands O-notation better than me,
feel free to try and fix this, but this is as good as I could do.

## ********** Final Thoughts ************
I'm happy to be able to share this program to allow others to find seeds
for Wii Sports and Wii Sports Resort Bingo runs. This program would likely
work for most other games on BingoSync if you added in the full list as an
array, so if any other game has a Bingo speedrun category, feel free to add
to this code and use it to best suit your needs. I know there may be the
optimal seed for each run, and it might come to a point where these are solved
categories, but I just hope this can help push the bingo scene forward and
give people the tools to turn this into a pure skill run rather than a seed
arms race. Also shameless plug: check out my YouTube channel Ectric if you
want to see me run these speedruns and more!
