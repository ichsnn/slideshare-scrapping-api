# Slideshare Image API

## Usage

Base URL : `https://slideshare-tools-api.herokuapp.com/`

### Get Slides Image Source :

``
https://slideshare-tools-api.herokuapp.com/api/slides/img?url=SLIDESHARE_URL
``

#### Output example :

```get image output
[
    {
        "slide": 1,
        "image": [
            {
                "resolution": "320w",
                "src": "image_url"
            },
            {
                "resolution": "638w",
                "src": "image_url"
            },
            {
                "resolution": "1024w",
                "src": "image_url"
            }
        ],
    }
]
```

## Built With

* Typescript
* Nodejs
* Expressjs
* Cheerio
