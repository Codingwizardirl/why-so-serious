""" Brain behind why-so-serious app """
import spotipy
import hug
import requests
import settings
from spotipy.oauth2 import SpotifyClientCredentials

client_credentials_manager = SpotifyClientCredentials(settings.SPOTIPY_CLIENT_ID, settings.SPOTIPY_CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)


@hug.get()
def get_playlist(emotion: hug.types.text):
    """Gets a playlist by emotion"""
    playlists = sp.search(emotion, 10, 0, 'playlist')
    return playlists['playlists']['items'][0]