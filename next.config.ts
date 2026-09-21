import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pretty URLs for the static Area 7 proposal. Intentionally not a redirect
  // from /area7 to /2027miniconf — those are different pages.
  async rewrites() {
    return [
      {
        source: "/area7",
        destination: "/area7-ds/ui_kits/area7-site/index.html",
      },
      {
        source: "/area7/",
        destination: "/area7-ds/ui_kits/area7-site/index.html",
      },
      {
        source: "/area7/meetings",
        destination: "/area7-ds/ui_kits/area7-site/meetings.html",
      },
      {
        source: "/area7/meetings/",
        destination: "/area7-ds/ui_kits/area7-site/meetings.html",
      },
      {
        source: "/area7/map",
        destination: "/area7-ds/ui_kits/area7-site/area7-map.html",
      },
      {
        source: "/area7/map/",
        destination: "/area7-ds/ui_kits/area7-site/area7-map.html",
      },
    ];
  },
};

export default nextConfig;
