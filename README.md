# electron-screensaver-seed

This is a minimal Electron application based on the [Electron Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation, *extended to handle the required behavior of Windows Screensavers.*

## Wait what?

Upon execution, the app looks through its command line switches, and in case it finds "/s" (which Windows issues when it wants to start an app as a screensaver), it goes full screen – and exits when the user presses a key or moves the mouse. It also downloads and displays some pictures of cats, as a quick example.

## But why...?

For use in the [#screensaverjam](http://itch.io/jam/screensaverjam) of course! I figured it might be fun to mix the bleeding edge with the extremely obsolete, and besides, this could allow suspicios people to check out in their browsers what the screen saver does without actually downloading an executable and registering it as a screen saver. Also, I plan to play around with the HTML 5 canvas for the jam.

## Okay, nevermind the screen saver part. What are the drawbacks?

First of all, electron is huge, meaning your simple screensaver will take close to a hundred megabyte to download, which is a bit extreme. Also, due to my actually limited knowledge of electron, I wasn't able to (or at leas patient enough) to:

- Implement the /c and /p switches (configuration mode and preview mode, respectively; the first one would be easy, but the second requires some nasty ```user32.dll``` calls I just didn't look forward to.
- Properly package the application. Instead of a nice, single .SCR file, the screensaver will have to be distributed in a ZIP archive or something like that. Windows will be install it as a screen saver nonetheless, though.

## Hey, I also want to make a screensaver using bleeding-edge technology!

Nice! To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:
```bash
# Clone this repository
git clone https://github.com/madve2/electron-screensaver-seed
# Go into the repository
cd electron-screensaver-seed
# Install dependencies - you'll need them both globally and locally
# (I know, I know, I should manage my dependencies properly; maybe I'll do next week)
npm install -g electron-prebuilt
npm install electron-prebuilt
# Run the screensaver!
electron main.js /s
```
Edit index.html to create a screensaver of your own – but not until the jam starts of course :)

## I made an awesome screensaver. How to distribute the thing?

For a nice web preview, you'll only need index.html (and anything else you add on your own). You'll want to remove any "require" calls and related code (like the ipc calls and the handlers that call them, in my example).

To make it work as a screensaver:
1. Copy everything from ```%APPDATA%\npm\node_modules\electron-prebuilt\dist```
2. Create a folder called "app" in the "resources" folder, and copy your app files (including main.js and package.json) to it.
3. Rename "electron.exe" to "myawesomescreensaver*.scr*", to turn it into a screensaver.
4. ZIP it together and you're ready to distribute.

There are some nice electron packagers if you'd prefer that over these manual steps, but I probably won't have the time to experiment with those before the jam.

You might also want to create a readme.txt file, telling your users to unpack the ZIP, right-click the *.scr* file, and select Install, if they actually want to use the thing as a screensaver. How nice of them!

#### License [CC0 (Public Domain)](LICENSE)