#signin to 1Password.

eval $(echo "$PASSWORD" | op account add --address $ADDRESS --email $EMAIL --secret-key $SECRET_KEY --signin)
op vault list

#create a test item

op item create --category=securenote --title='mongodbkey' --vault=v2qmba5ejlbqkznlepz7nllj4e "note=somedata"
