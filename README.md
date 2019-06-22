# Saber Stars HTTP Status Tournament Overlay

A web-based overlay for Beat Saber based on the (Unnamed) Beat Saber Overlay by Reselim.

![image](https://imgur.com/fQ3ym1E.png)

## Installation (OBS)

1. Download and install the [BeatSaberHTTPStatus plugin](https://github.com/benneeh/beatsaber-http-status/releases/download/v1.5.1b/BeatSaberHTTPStatus-1.5.1-bs1.0.0-de4e310a.zip). *To install, simply extract that zip file into your `Beat Saber` directory.*

2. Create a Browser source

![image](https://imgur.com/mYnlAIT.png)

3. Set the URL as `http://overlay.assistant.moe/` and the size equal to **1280x720**. If your stream is not 720p, set this to 1280x720 anyway, and we will fit it to the screen in the next step!

![image](https://imgur.com/h6BVGye.png)

4. Fit the overlay to the screen by right clicking on the Browser source -> `Transform` -> `Fit to screen`

![image](https://imgur.com/zQdc2gR.png)


You're done! Your screen should now look like this

![image](https://imgur.com/sqWB1CI.png)

## OPTIONAL: 2 PC setup

If you are using a 2 PC setup, it is possible to connect your streaming PC to your gaming PC by simply entering the IP and port info.

### `ip` and `port`

Use the following URL, where `xxx.xxx.xxx.xxx` is your IP, and `yyyy` is your port

```
http://overlay.assistant.moe/?ip=xxx.xxx.xxx.xxx?port=yyyy
```

Example:
```
http://overlay.assistant.moe/?ip=192.168.1.1?port=5000
```
