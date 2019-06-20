# Saber Stars HTTP Status Tournament Overlay

A web-based overlay for Beat Saber based on the (Unnamed) Beat Saber Overlay by Reselim.

![image](https://imgur.com/QEFmuWa.png)

## Installation (OBS)

1. Download and install the [BeatSaberHTTPStatus plugin](https://github.com/opl-/beatsaber-http-status/releases)
2. Create a Browser source

![image](https://imgur.com/mYnlAIT.png)

3. Set the URL as `http://overlay.assistant.moe/` and the size equal to 1280x720. **NOT your full canvas size.**

![image](https://imgur.com/h6BVGye.png)

4. Fit the overlay to the screen by right clicking on the Browser source -> `Transform` -> `Fit to screen`

![image](https://imgur.com/zQdc2gR.png)


## 2 PC setup

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
