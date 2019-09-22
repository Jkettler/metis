FROM ruby:2.6.2

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

ENV APP_ROOT=/metis/backend
WORKDIR ${APP_ROOT}

COPY Gemfile* ./

RUN bundle install

COPY . .