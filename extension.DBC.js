var dbcloginurl = "chriseric1.github.io"

var extraInfoSpecRequest = ["blocking", "requestHeaders"];
var extraInfoSpecResponse = ["blocking", "responseHeaders"];
if (typeof chrome !== "undefined") {
	if (typeof browser !== "undefined") {
		var fir = true;
		var chr = false;
	} else {
		var fir = false;
		var chr = true;
	}
}
if (chr) extraInfoSpecRequest.push("extraHeaders") && extraInfoSpecResponse.push("extraHeaders");
chrome.webRequest.onBeforeSendHeaders.addListener(
	function (details) {
 		if (chr) if (!details.initiator.includes(dbcloginurl)) return;
 		if (fir) if (!details.originUrl.includes(dbcloginurl)) return;

		let header = details.requestHeaders.find((e) => e.name.toLowerCase() === "origin");
		if (header) header.value = "https://discord.com";
		else details.requestHeaders.push({ name: "Origin", value: "https://discord.com" });

		details.requestHeaders = details.requestHeaders.filter((x) => x.name.toLowerCase() !== "user-agent");

		return { requestHeaders: details.requestHeaders };
	},
	{
		urls: ["<all_urls>"],
	},
	extraInfoSpecRequest
);
chrome.webRequest.onHeadersReceived.addListener(
	(details) => {
 		if (chr) if (!details.initiator.includes(dbcloginurl)) return;
 		if (fir) if (!details.originUrl.includes(dbcloginurl)) return;

		let header = details.responseHeaders.find((e) => e.name.toLowerCase() === "access-control-allow-origin");
		if (header) header.value = "*";
		else details.responseHeaders.push({ name: "Access-Control-Allow-Origin", value: "*" });

		return { responseHeaders: details.responseHeaders };
	},
	{
		urls: ["<all_urls>"],
	},
	extraInfoSpecResponse
);
