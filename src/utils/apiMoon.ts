class Moon {
  private _baseUrl: string;
  constructor(options: { baseUrl: string }) {
    this._baseUrl = options.baseUrl;
  }

  async _getResponseData(res: Response) {
    if (!res.ok) {
      return Promise.reject(await res.text());
    }
    return res.json();
  }

  getMoonPhase(coords: string) {
    const key = "PTMV5UULQWQ39RXFFFXP2FT3Z";
    return fetch(
      `${this._baseUrl}/VisualCrossingWebServices/rest/services/timeline/${coords}?unitGroup=us&key=${key}&include=days&elements=datetime,moonphase,sunrise,sunset,moonrise,moonset
        `,
      {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }
    ).then((res) => this._getResponseData(res));
  }
}

export const MoonApi = new Moon({
  baseUrl: `https://weather.visualcrossing.com`,
});
