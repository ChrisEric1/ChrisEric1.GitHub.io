# Discord Bot Client

For a electron download of the website, no extension required go here http://github.com/ChrisEric1/ChrisEric1.GitHub.io/releases

For web browser version, goto http://chriseric1.github.io/login and sideload the extension in chrome http://github.com/ChrisEric1/ChrisEric1.GitHub.io/archive/refs/heads/ce1cecl.zip

Note there isn't a working extension of any other source but this at the moment, and changing the site endpoint REQUIRES you to change the extension at the moment.

If you are using Firefox and need the extension go here: https://github.com/ChrisEric1/ChrisEric1/releases Note that Firefox is known to be buggy for some reason, even when unsigned, stays at a white screen and disabling it makes it worse. To use it, Login without the extension, wait until loaded and then install it. When done, remove it completly from your browser. Refreshing the page can break it too, but moving around channels shouldn't.

For lightcord

A. You need to download the following 
Lightcord Patches No recompling required http://github.com/ChrisEric1/ChrisEric1/archive/refs/heads/main.zip 
Node.js (assuming windows x64) http://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi
Lightcord http://github.com/Lightcord/Lightcord/releases/download/v0.1.9/lightcord-win32-ia32.zip

To run, install node.js with all required build tools, this maybe needed at a later point. Then unzip Lightcord and run it, let it goto the login screen
and when it "loads", close it out completly from tray icon. 
Then unzip the patches, copy settings.json to "%APPDATA%\lightcord\settings.json" assuming you are using windows, the open a cmd window, cd into the patches folder
and run **npm i** and **node index.js**, and then run lightcord. If it gets stuck, Completly close it out and run it again. 
Now it should work with the last newest assets compatiable with lightcord.

B. You may also compile lightcord, you need the modified source code http://github.com/ChrisEric1/Lightcord with its requirements like node.js Compile lightcord and then run lightcord. Thats it. 

C. Download and run the latest release from https://github.com/ChrisEric1/Lightcord/releases and run it WITHOUT ANY PATCHES NEEDED! Note you may need to close it and reopen if running for the first time due to a bug, and tabs don't currently work at the moment. 

# FAQ

Q: Why do I need a extension?

A: Discord blocks other sites using CORS and only extensions will work, you could also host a CORS proxy, which isn't recommended since the person hosting is more likely to get banned rather than the person actually using it

Q: Why does the extension only work on http://chriseric1.github.io/ ?

A: You can change it but for security reasons we keep it like this. We could also use a source detector but I am not likely to merge it tho (because of hacks if too many people install the extension).

Q: Assets in this repo?

A: Required by discord firewall so it even loads up at all. Similar to CORS, but its a CloudFlare Firewall (1020)

Q: Antivirus flags your files

A: These files aren't digitally signed at all, thats why.

Q: Are you going to update the client?

A: No, since I can't unless I knew how to but I don't, LC is as new as we are most likely going to get. But for the web, I at least tried to, but there were gateway problems so I left it as is.

Q: Lightcord is still too old for me

A: There is also https://github.com/ChrisEric1/ChrisEric1.GitHub.io/tree/new (which is currently in testing), login is currently at http://ce1cecl.github.io/login (until fully working, will move here after finish)

