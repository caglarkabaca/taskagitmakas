from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

def index(request):
    
    return render(request, 'base/new.html')

def game(request, code):

    #get_data
    import json

    with open("./static/base/rooms.json") as f:

        data = json.loads(f.read())



    #check room

    player = 0
    
    try:
        room = data['rooms'][code] #room var o zaman biz p2yiz
        player = 2
    except KeyError:

        data['rooms'][code] = {'p1_secim' : 31, 'p2_secim' : 31}

        with open('./static/base/rooms.json', 'w') as f:

            f.write(json.dumps(data))
        
        player = 1

        


    return render(request, 'base/game.html', context={'player' : player, 'json' : json.dumps(data)} )


def upd(request, codes):

    import json

    codes = codes.split('-')

    code = codes[0]
    choice = codes[1]
    player = codes[2]

    with open("./static/base/rooms.json") as f:

        data = json.loads(f.read())

        if player == "1":

            data['rooms'][code]['p1_secim'] = choice

        elif player == "2":

            data['rooms'][code]['p2_secim'] = choice

    with open("./static/base/rooms.json", "w") as f:

        json = json.dumps(data)

        f.write(json)

        return HttpResponse("<script> window.close() </script>")

def read(request):

    with open("./static/base/rooms.json") as f:

        return HttpResponse(f.read())


def dele(request, codes):

    with open("./static/base/rooms.json") as f:

        data = json.loads(f.read())

        del data['rooms'][codes]

        print("data silindi")

    with open("./static/base/rooms.json", "w") as f:

        json = json.dumps(data)

        f.write(json)

        return HttpResponse("<script> window.close() </script>")