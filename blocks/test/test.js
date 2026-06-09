export default function init() {
  const url = 'https://apims.kaiserpermanente.org/kp/care/api/sda/kp-search-api/v1/api/kporg/search/v1?v:sources=kp-health-classes-proximity&v:project=kp-classes-project&query=&rop=NCA&user_zip=84109&binning-state=distance=0:50\nhealth_topic==Brain and nerves&user_lat=&user_lon=&locale=en-us&render.function=json-feed-display-document&content-type=application-json&render.list-show=10&v:state=root|root-0-10|0';

  fetch(url, {
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'go-compute': '1',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}
