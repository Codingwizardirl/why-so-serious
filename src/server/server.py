""" Brain behind why-so-serious app """
import spotipy
import hug
import requests
import settings

from spotipy.oauth2 import SpotifyClientCredentials

client_credentials_manager = SpotifyClientCredentials(settings.SPOTIPY_CLIENT_ID, settings.SPOTIPY_CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# EMOTIONS API

@hug.post('/emotions')
def emotions(url):
    """Returns array of dominant emotions by given url"""
    payload = {'url': url}
    headers = {
        'Content-Type': "application/json",
        'Ocp-Apim-Subscription-Key': settings.MICROSOFT_EMOTION_API_KEY,
        }
        
    r = requests.post('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize', headers=headers, json=payload)
    results = r.json()
    top_emotions = list(map(get_main_emotion, results))
    return top_emotions
 
def get_main_emotion(result):
    emotions = result['scores']
    top_emotion = max(emotions, key=emotions.get)
    return top_emotion


# PLAYLISTS API

@hug.post('/playlists')
def playlists(url):
    """Returns array of objects each of which dominant emotion and spotify playlist related to it"""
    """ Uses Spotify Web API """
    emotionsArray = emotions(url)
    return list(map(get_playlist, emotionsArray))

def get_playlist(emotion):
    data = { 'emotion': emotion }
    data['playlist'] = sp.search(emotion, 10, 0, 'playlist')['playlists']['items'][0]
    return data
