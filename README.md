= Development

    $ bundle install
    $ bundle exec rackup

= Deployment

    $ cd public
    $ aws s3 sync . s3://www.danielsauble.com --delete
