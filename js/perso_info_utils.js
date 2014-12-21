var writeMailToLink = function()
{
	var username = "adrien.philippe.pro";

	var hostname = "gmail.com";

	var linktext = username + "@" + hostname ;

	document.write("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
}

var writeAge = function()
{
	var birthday = new Date(1986, 3, 3);
	var now = new Date();

	var yearDiff = now.getFullYear() - birthday.getFullYear();
	var monthDiff = now.getMonth() - birthday.getMonth();

	if(monthDiff < 0)
	{
		// Not in the birthday month yet
		yearDiff--;
	}
	else if (monthDiff == 0)
	{
		// we are in birthday month
		var dayDiff = now.getDate() - birthday.getDate();
		if(dayDiff < 0)
		{
			// Not the birthday yet
			yearDiff--;
		}
	}

	document.write(yearDiff);

}