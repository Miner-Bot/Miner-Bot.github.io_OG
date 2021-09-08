function titleCase(str) {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
fetch('commands.json')
  .then(function (response) {
  return response.json();
})
  .then(function (data) {
  appendData(data);
})
  .catch(function (err) {
  console.log(err);
  document.getElementById('commands-info').innerHTML = err;
});

                    function appendData(data) {
                      const prefix = '=';
                      for (var o = 0; o < data.length; o++) {
                        var str;
                        if (data[o].usage && data[o].aliases) {
                          str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name + ' ' + data[o].usage + '<br>' + 'Aliases:' + ' ' + prefix + data[o].aliases;
                        } else if (data[o].usage && !data[o].aliases) {
                          str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name + ' ' + data[o].usage;
                        } else if (!data[o].usage && data[o].aliases) {
                          str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name + '<br>' + 'Aliases:' + ' ' + prefix + data[o].aliases;
                        } else if (!data[o].usage && !data[o].aliases) {
                          str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name;
                        }
                        var table = document.getElementById("commands-info");
                        var tr = document.createElement("tr");
                        var td = document.createElement("td");
                        var hr = document.createElement("hr");
                        var p = document.createElement("p");
                        var a = document.createElement("a");
                        var div = document.createElement("div");

                        var att = document.createAttribute("id");
                        var att2 = document.createAttribute("class");
                        var att3 = document.createAttribute("class");
                        var att4 = document.createAttribute("class");
                        // -for href method- var href = document.createAttribute("href");
                        var aclass = document.createAttribute("id");
                        var onclick = document.createAttribute("onclick");
                        var relativeatt = document.createAttribute("style");


                        att.value = data[o].name;
                        att2.value = 'text-box bungee-body-text';
                        att3.value = 'divider-page-width-mod my-2';
                        att4.value = 'bungee-small-body-text';
                        relativeatt = 'position: relative;'
                        
                        a.innerHTML = titleCase(data[o].name);
                        
                        onclick.value = 'localStorage.setItem("clickedon", "' + data[o].name + '");window.location.replace("/command#' + data[o].name + '");';
                        // -for href method- href.value = '/command#' + data[o].name;
                        
                        table.appendChild(tr);
                        tr.setAttributeNode(att);
                        tr.appendChild(td);
                        td.setAttributeNode(att2);
                        div.setAttributeNode(relativeatt);

                        a.setAttributeNode(onclick);
                        // -for href method- a.setAttributeNode(href);
                        td.appendChild(div);
                        td.appendChild(a);
                        if (tr.getAttribute('id') === "downtime" || tr.getAttribute('id') === "move" || tr.getAttribute('id') === "msgs" || tr.getAttribute('id') === "reload" || tr.getAttribute('id') === "restart" || tr.getAttribute('id') === "setactivity" || tr.getAttribute('id') === "stats" || tr.getAttribute('id') === "testing") {
                          var badge = document.createElement('span');
                          var badgeclass = document.createAttribute('class');
                          var badgestyle = document.createAttribute('style');
                          badgeclass.value = 'badge badge-pill badge-danger';
                          badgestyle.value = 'position:absolute;right:0px;top:0px;';
                          badge.setAttributeNode(badgeclass);
                          badge.innerHTML = '!';
                          div.appendChild(badge);
                        }
                        // td.innerHTML = '<a class="js-scroll-trigger" href="/command' + location.hash + '" onclick="localStorage.setItem("clickedon", data[o].name)">' + titleCase(data[o].name) + '</a>';
                        td.appendChild(hr);
                        td.appendChild(p);
                        hr.setAttributeNode(att3);
                        p.setAttributeNode(att4);
                        p.innerHTML = str;
                      }
                      /*command = document.getElementById('move').getElementByTagName('a');
                      command.appendChild(badge);
                      command = document.getElementById('msgs').getElementByTagName('a');
                      command.appendChild(badge);
                      command = document.getElementById('reload').getElementByTagName('a');
                      command.appendChild(badge);
                      command = document.getElementById('restart').getElementByTagName('a');
                      command.appendChild(badge);
                      command = document.getElementById('setactivity').getElementByTagName('a');
                      command.appendChild(badge);
                      command = document.getElementById('stats').getElementByTagName('a');
                      command.appendChild(badge);
                      command = document.getElementById('testing').getElementByTagName('a');
                      command.appendChild(badge);*/
                    }
