function addRow()
{
	var suptbl = document.getElementById("suppliertable");
	var rowcnt = suptbl.rows.length;
	var tr = suptbl.insertRow(rowcnt);

	for (var c=0; c<8; c++)
	{
		var td=document.createElement('td');
		td=tr.insertCell(c);

		if (c==6)
		{
			var button = document.createElement("button");
			button.setAttribute('class','delbutton');
			button.setAttribute('value','&#10799;');
			button.setAttribute('onclick','removebtn(this)');
			td.appendChild(button);
		}
		else if (c==7)
		{
			var button = document.createElement("button");
			button.setAttribute('class','editbutton');
			button.setAttribute('value','&#9998;');
			td.appendChild(button);
		}
		else
		{
			var elem = document.createElement("");
			td.appendChild(elem);
		}
	}
}


function removebtn(oButton)
{
	var del = document.getElementById("suppliertable");
	del.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
