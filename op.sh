#signin to 1Password.

eval $(echo "$PASSWORD" | op account add --address $ADDRESS --email $EMAIL --secret-key $SECRET_KEY --signin)
op item create --category=securenote --title='new test item' --vault=v2qmba5ejlbqkznlepz7nllj4e "note=somedata"
