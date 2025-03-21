// module.exports = () => ({});

module.exports = ({ env }) => ({
    upload: {
      config: {
        providerOptions: {
          localServer: {
            baseUrl: "http://localhost:1337",
          },
        },
      },
    },
  });
  