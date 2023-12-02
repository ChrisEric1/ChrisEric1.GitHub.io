export const minimumDiscordVersion = "0.0.308";
export const currentDiscordVersion = (window.DiscordNative && window.DiscordNative.remoteApp && window.DiscordNative.remoteApp.getVersion && window.DiscordNative.remoteApp.getVersion()) || "0.0.308";
export const minSupportedVersion = "0.3.0";
export const bbdVersion = "0.3.5";
export const bbdChangelog = {
  description: "Security updates and more!",
  changes: [
    {
      title: "Bug Fixes & More.",
      type: "fixed",
      items: [
        "Updated various dependencies.",
        "Added badges to new devs.",
        "Change BandageBD naming inside Lightcord to LightcordBD",
        "New release system that allows us to spend more time on actually developing rather than compiling packages ;)",
      ],
    },
  ],
};

export const settings = {
    "Custom css live update":     {id: "bda-css-0", info: "",                                                  implemented: true,  hidden: true,  cat: "core"},
    "Custom css auto udpate":     {id: "bda-css-1", info: "",                                                  implemented: true,  hidden: true,  cat: "core"},
    "BetterDiscord Blue":         {id: "bda-gs-b",  info: "Replace Discord blue with BD Blue",                 implemented: false,  hidden: false, cat: "core"},

    /* Core */
    /* ====== */
    "Public Servers":             {id: "bda-gs-1",  info: "Display public servers button",                     implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Minimal Mode":               {id: "bda-gs-2",  info: "Hide elements and reduce the size of elements.",    implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Voice Mode":                 {id: "bda-gs-4",  info: "Only show voice chat",                              implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Hide Channels":              {id: "bda-gs-3",  info: "Hide channels in minimal mode",                     implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Dark Mode":                  {id: "bda-gs-5",  info: "Make certain elements dark by default(wip)",        implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Voice Disconnect":           {id: "bda-dc-0",  info: "Disconnect from voice server when closing Discord", implemented: true,  hidden: false, cat: "core", category: "modules"},
    "24 Hour Timestamps":         {id: "bda-gs-6",  info: "Replace 12hr timestamps with proper ones",          implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Colored Text":               {id: "bda-gs-7",  info: "Make text color the same as role color",            implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Normalize Classes":          {id: "fork-ps-4", info: "Adds stable classes to elements to help themes. (e.g. adds .da-channels to .channels-Ie2l6A)", implemented: true,  hidden: false, cat: "core", category: "modules"},

    /* Content */
    "Content Error Modal":        {id: "fork-ps-1", info: "Shows a modal with plugin/theme errors", implemented: true, hidden: false, cat: "core", category: "content manager"},
    "Scan Plugins":               {id: "fork-ps-6", info: "Scan plugins for any threat that can be hidden inside.", implemented: true, hidden: false, cat: "core", category: "content manager"},
    "Show Toasts":                {id: "fork-ps-2", info: "Shows a small notification for important information", implemented: true, hidden: false, cat: "core", category: "content manager"},
    "Scroll To Settings":         {id: "fork-ps-3", info: "Auto-scrolls to a plugin's settings when the button is clicked (only if out of view)", implemented: true, hidden: false, cat: "core", category: "content manager"},
    "Automatic Loading":          {id: "fork-ps-5", info: "Automatically loads, reloads, and unloads plugins and themes", implemented: true, hidden: false, cat: "core", category: "content manager"},
    "Enable Edit Button":         {id: "fork-ps-7", info: "Enable an Edit Button on the plugin and theme panel.", implemented: true, hidden: false, cat: "core", category: "content manager"},
    "Themes in Popout Window":    {id: "lightcord-9", info: "Enable themes in Popout Window. (For example, when detaching screenshare.)", implemented: true, hidden: false, cat: "core", category: "content manager", experimental: true},

    /* Developer */
    "Developer Mode":         	  {id: "bda-gs-8", info: "Developer Mode Toggle", implemented: true, hidden: false, cat: "core", category: "developer settings"},
    "Copy Selector":			  {id: "fork-dm-1", info: "Adds a \"Copy Selector\" option to context menus when developer mode is active", implemented: true, hidden: false, cat: "core", category: "developer settings"},

    /** Lightcord */
    "Disable BetterDiscord":      {id: "bd-disable",  info: "Disable Betterdiscord (plugins, themes, etc) (Not implemented).", implemented: false, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Blur Personal Information":  {id: "lightcord-6", info: "Blur sensitive informations like email, payment infos and more.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Calling Ring Beat":          {id: "lightcord-2", info: "Enable Discord's special calling beat.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Developer Options":          {id: "lightcord-1", info: "Enable Discord's & Lightcord's Internal Developer Options. This allow the \"Experiments\" tab, the \"Developer Options\" tab and the \"Lightcord Api\" section.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Ad Block":                   {id: "lightcord-4", info: "Block any BOT that dms you with an invite link. Even in an embed.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Enable Lightcord Servers":   {id: "lightcord-5", info: "Enable Lightcord's servers. Disabling this will disable custom badges.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Disable typing":             {id: "lightcord-7", info: "Don't let other see you're typing.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord"},
    "Lightcord Tabs":             {id: "lightcord-8", info: "Allows you to launch multiple instances of Lightcord in the same window.", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord", experimental: true},
    "Use Notification Shim":      {id: "lightcord-10", info: "Basically don't use Windows's Notifications.", implemented: true, hidden: process.platform !== "win32", cat: "lightcord", category: "Lightcord"},
    "Emoji Prefix":               {id: "lightcord-11", info: "Change the prefix used for free nitros emojis. Please put only one character. Default: .", implemented: true, hidden: false, cat: "lightcord", category: "Lightcord", default: "."},

    /** Lightcord Window */
    "Always-on-Top":              {id: "lightcord-3", info: "Enable the window's Always-on-Top mode, where Lightcord stays on top of other applications.", implemented: true, hidden: false, cat: "lightcord", category: "Window"},
    "No Window Bounds":           {id: "no_window_bound", info: "Disable Window Bounds. Can be useful if you use a window manager.", implemented: true, hidden: process.platform !== "linux", cat: "lightcord", category: "Window"},
    "Enable Glasstron":           {id: "enable_glasstron", info: "Enable Glasstron. If you're not using transparent themes, this can reduce lag.", implemented: true, hidden: false, cat: "lightcord", category: "Window"},
    
    /** RichPresence */
    "Enable":                     {id: "lightcord-presence-1", info: "Enable RichPresence below.", implemented: true, hidden: false, cat: "status"}
};

export const defaultCookie = {
    "bda-gs-1": true,
    "bda-gs-2": false,
    "bda-gs-3": false,
    "bda-gs-4": false,
    "bda-gs-5": true,
    "bda-gs-6": false,
    "bda-gs-7": false,
    "bda-gs-8": false,
    "bda-es-0": true,
    "bda-es-1": true,
    "bda-es-2": true,
    "bda-es-4": false,
    "bda-es-6": true,
    "bda-es-7": true,
    "bda-gs-b": false,
    "bda-es-8": true,
    "bda-dc-0": false,
    "bda-css-0": false,
    "bda-css-1": false,
    "bda-es-9": true,
    "fork-dm-1": false,
    "fork-ps-1": true,
    "fork-ps-2": true,
    "fork-ps-3": true,
    "fork-ps-4": true,
    "fork-ps-5": true,
    "fork-ps-6": true,
    "fork-ps-7": false,
    "fork-es-2": false,
    "fork-es-3": true,
    "fork-wp-1": false,
    "fork-wp-2": false,
    "fork-beta": true,
    "lightcord-1": false,
    "lightcord-2": true,
    "lightcord-presence-1": false,
    "lightcord-3": false,
    "lightcord-4": false,
    "lightcord-5": true,
    "lightcord-6": true,
    "lightcord-7": false,
    "lightcord-8": false,
    "lightcord-9": false,
    "lightcord-10": false,
    "no_window_bound": false,
};


export const settingsCookie = {};

export const settingsRPC = {};
export const defaultRPC = {
    "name": "Lightcord",
    "application_id": "711416957718757418",
    "state": "Lightcord Client",
    "details": "Browsing Discord",
    "timestamps.start": Date.now(),
    "assets.small": null,
    "assets.large": "712323821037682791"
}

export const lightcordSettings = {};
export const defaultLightcordSettings = {};

export const bdpluginErrors = [];
export const bdthemeErrors = []; // define for backwards compatibility

export const bdConfig = Object.create(BetterDiscordConfig);

export const bdthemes = {};
export const bdplugins = {};

export const pluginCookie = {};
export const themeCookie = {};