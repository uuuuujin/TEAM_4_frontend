interface DeviceSize {
  mobile: number;
  tablet: number;
  desktop: number;
}

const deviceSizes: DeviceSize = {
  mobile: 600,
  tablet: 1200,
  desktop: 2560,
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
  desktop: `screen and (max-width: ${deviceSizes.desktop}px)`,
};

export default device;
