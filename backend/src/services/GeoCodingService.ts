export class GeoCodingService {
  static async getCoordinatesByAddress(
    address: string
  ): Promise<{ latitude: number; longitude: number } | null> {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          address
        )}&key=${process.env.GOOGLE_API_KEY}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        return { latitude: lat, longitude: lng };
      }
    } catch (error) {
      console.error("Error geocoding address:", error);
    }
    return null;
  }

  static async getCoordinatesByCity(
    city: string
  ): Promise<{ latitude: number; longitude: number } | null> {
    try {
      const response = await fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`
			);
      if (response.ok) {
        const data = await response.json();

        if (data.features && data.features.length > 0) {
          const firstResult = data.features[0];
          const latitude = firstResult.center[1];
          const longitude = firstResult.center[0];
          return { latitude, longitude };
        } else {
          console.log("Aucune caractéristique trouvée pour la ville:", city);
        }
      }
    } catch (error) {
      console.error(
        "Error can't not get latitude and longitude from city:",
        error
      );
    }
    return null;
  }
}
