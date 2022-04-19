# Slideshare Image API

## Usage

Base URL : `https://slideshare-image-api.herokuapp.com/`

### Get Slides Image Source

``
https://slideshare-image-api.herokuapp.com/api/slides/img?url=SLIDESHARE_URL
``

#### Output example

```get image output
{
    results: [
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
    ],
    status: true
}
```

## Built With

* Typescript
* Nodejs
* Expressjs
* Cheerio
