import React, { Suspense } from "react";
import ThemeProvider from "./context/ThemeProvider"; // Import the ThemeProvider
// Lazy load the ImageGallery component
const ImageGallery = React.lazy(() => import("./components/ImageGallery"));

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1 className="heading">Camera Roll</h1>
        {/* Use Suspense to wrap the ImageGallery component */}
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <ImageGallery />
        </Suspense>
        {/* Your other components */}
      </div>
    </ThemeProvider>
  );
}

export default App;
