# build stage
FROM node:latest

# Add our user and group first to make sure their IDs get assigned consistently,
# regardless of whatever dependencies get added.
RUN groupadd --system nightmare && useradd --system --create-home --gid nightmare nightmare

# Installing the pre-required packages and libraries for electron & Nightmare
RUN apt-get update && \
      apt-get install -y libgtk2.0-0 libgconf-2-4 \
      libasound2 libxtst6 libxss1 libnss3 xvfb

# Install latest chrome dev package.
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN apt-get update && apt-get install -y wget --no-install-recommends \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable \
      --no-install-recommends \
    && apt-get install -y libgbm1 \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get purge --auto-remove -y curl \
    && rm -rf /src/*.deb

# Uncomment to skip the chromium download when installing puppeteer. If you do,
# you'll need to launch puppeteer with:
#     browser.launch({executablePath: 'google-chrome-unstable'})
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true


# Add pptr user.
RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /home/pptruser


# Install Java for allure reporting
RUN apt-get update && apt-get -y install default-jre


WORKDIR /app/tests
COPY package*.json ./
RUN npm install
COPY . .
#CMD ["sh", "-c", "npx codeceptjs run --steps"]
EXPOSE 3000
CMD ["sh", "-c", "npx codeceptjs run --steps && npx allure serve testReports/allure-reports --port 3000"]
