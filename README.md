# What is this?
**microbit-shell** is a shell that runs inside a micro:bit. It was made in the Makecode editor using Javascript.

## How to use this project
**Currently this project _only supports PuTTY_**.
  - Stuff you need
    - A BBC micro:bit
    - A USB cable
    - A simple PC or laptop with Internet
    
1. Download PuTTY from their [official website](https://www.putty.org/).
2. Install PuTTY.
3. Open the Makecode [website](https://makecode.microbit.org/).
4. Import this project to the Makecode editor (more info below). 
5. When you are in the project press the download button.
6. Once you have the hex file, plug in your BBC micro:bit into your computer.
7. Open the MICROBIT drive in File Explorer.
8. Drag the hex file you downloaded to the drive (after that your micro:bit's small yellow LED will start flashing, wait until it stops and wait until it remounts itself too).
9. Open PuTTY.
10. Select serial in the connection type.
11. Open device manager and find the micro:bit's COM port.
12. In PuTTY type in the COM port in the serial line.
13. And set the speed to 115200.

#### DONE, Enjoy the project.

## How to import this project ![Build status badge](https://github.com/skpg-github/microbit-shell/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.
 - **There are two ways you can import this project**
   - Using import from URL
     - open [https://makecode.microbit.org/](https://makecode.microbit.org/)
     - click on **Import** then click on **Import URL**
     - paste **https://github.com/skpg-github/microbit-shell** and click import
   - Using your GitHub account
     - fork this repository
     - open [https://makecode.microbit.org/](https://makecode.microbit.org/)
     - click on **Import** then click on **Your GitHub repo**
     - it may ask you to log in to your GitHub account
     - select this repo from the list

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/skpg-github/microbit-shell/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
