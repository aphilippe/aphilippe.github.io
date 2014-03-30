var writeMailToLink = function()
{
	var username = "adrien.philippe.pro";

	var hostname = "gmail.com";

	var linktext = username + "@" + hostname ;

	document.write("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
}