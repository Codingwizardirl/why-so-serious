""" Brain behind why-so-serious app """
import spotipy
import hug
import requests
import settings

from spotipy.oauth2 import SpotifyClientCredentials

client_credentials_manager = SpotifyClientCredentials(settings.SPOTIPY_CLIENT_ID, settings.SPOTIPY_CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)


@hug.get('/playlists')
def playlists(emotions):
    """Returns first array of playlists by given emotions array"""
    return list(map(get_playlist, emotions))

def get_playlist(emotion):
    return sp.search(emotion, 10, 0, 'playlist')['playlists']['items'][0]