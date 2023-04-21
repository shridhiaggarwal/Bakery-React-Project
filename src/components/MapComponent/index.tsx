import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import styled from "styled-components";

interface ILocationProps {
  id: string;
  position: LatLngExpression;
  name: string;
  picture?: string;
  description?: string;
  seeMoreLink?: string;
}

interface IMapComponentProps {
  location: ILocationProps;
  zoom: number;
  zoomControl?: boolean;
  scrollWheelZoom?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
}

const StyledMap = styled.div<{
  width?: string;
  height?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;

function MapComponent(props: IMapComponentProps) {
  const { location, zoom, zoomControl, scrollWheelZoom, width, height, margin, border, borderRadius } = props;
  const defaultPosition: LatLngExpression = [28.680911, 77.204587];
  const mapLocation: LatLngExpression = location.position
    ? location.position
    : defaultPosition;

  return (
    <StyledMap width={width} height={height} margin={margin} border={border} borderRadius={borderRadius}>
      <MapContainer
        center={mapLocation}
        zoom={zoom}
        zoomControl={zoomControl}
        scrollWheelZoom={scrollWheelZoom}
        style={{ width: "100%", height: "100%", borderRadius: borderRadius }}
        attributionControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker key={location.id} position={mapLocation}>
          <Tooltip>{location.name}</Tooltip>
          {/* <Popup>{location.name}</Popup> */}
        </Marker>
      </MapContainer>
    </StyledMap>
  );
}

export default MapComponent;
