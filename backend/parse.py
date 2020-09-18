from bs4 import BeautifulSoup
import re
import json

def parse():
    dict = {}
    file = open('./bathroomList.html', 'r')
    data = file.read()
    soup = BeautifulSoup(data, features="lxml")

    tbodys = soup.find_all('tbody')
    for tbody in tbodys:
        trs = tbody.find_all('tr')
        for tr in trs:
            innerDict = {}
            accessible = False

            tds = tr.find_all('td')
            name = tds[0].get_text().encode('utf-8')
            link = tds[1].a['href']

            br = str(tds[1]).find('<br/>') + 5

            location = str(tds[1])[br:-5].strip()
            if len(tds) == 3:
                accessible = True

            innerDict['link'] = link
            innerDict['location'] = location.replace('&amp;', '&')
            innerDict['accessible'] = accessible
            dict[name] = innerDict

    json_object = json.dumps(dict, indent = 4)
    f = open('./bathroomListings.json', 'w+')
    f.write(json_object)
parse()
