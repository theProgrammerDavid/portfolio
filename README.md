# My Portfolio Website

I wanted my own portfolio website but didn't wanna use a template. So i made my own. 

> Yes, i know that storing PDFs on Github feels illegal

My original idea involved the use of blender and UE4 and no definite timeline but was quickly scrapped since the initial download size of code + assets would be in the hundreds of MBs. 

So i settled for this. I heard Snowpack was quite good and i had found this really cool library called ``JQuery Terminal`` .

> Note: By Default, Snowpack does not enable the experimental feature to minifying builds. Hence, you will have to enable it yourself

Add these to your `snowpack.config.js` file
```json
"experiments": {
    "optimize": {
      "bundle": true,
      "minify": true,
      "target": 'es2018'
    }
  }
```
