# Lightcord's Discord.js

Disclaimer:
This part of Lightcord is still in development. Features could be added/change/removed.

### What is this ? 
Lightcord includes a Discord.js-like api. This is written in this folder.

<warn>This is not for making selfbots. 
The purpose of this is only to make an easy, intuitive and object oriented api.</warn>

### Where can I get the documentation ?
[Documentation here](https://discord.js.org/#/docs/main/11.6.4/general/welcome)
Discord.js on Lightcord is based on Discord.js 11.6.4.

### How do I use it ?
Discord.js can be accessed under the following global properties

| Name                         | Global Properties       | alias                   | Limitations                                                           |
|------------------------------|-------------------------|-------------------------|-----------------------------------------------------------------------|
| DiscordJS main module        | window.DiscordJS        | none                    | none                                                                  |
| DiscordJS client             | window.DiscordJSClient  | window.DiscordJS.client | none                                                                  |
| DiscordJS Client constructor | window.DiscordJS.Client | none                    | Can't be constructed because there's no need for more than one client |

### Deprecations
1. Any method that only bot can use (it will throw a `DiscordJSError` saying that Lightcord can't do that)
2. Original Voice Methods. They're documented below:
3. Try to not use deprecated methods flagged on DiscordJS's website. They might be removed on Lightcord.

### Voice
Lightcord can't make the client join multiple voice channels / join but the user doesn't know.

When joining a voice channel, The user's mic is sent. This is not for broadcasting/playing music in voice, but only to make the user join a voice channel.