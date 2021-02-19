package example

allow {
    false # unless otherwise defined, allow is false
} 

allow { # allow is true if...
    input.name == "wolfgang"
    input.favorite_color == "blue"
}

        # {
        #   "index": 0,
        #   "terms": {
        #     "type": "boolean",
        #     "value": true
        #   }
        # }