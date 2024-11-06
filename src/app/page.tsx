import AdPlacement from "@/components/AdPlacement";
import ConverterCard from "@/components/ConverterCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Unit Converter Plus - Free Online Conversion Tools",
  description:
    "Convert between different units of measurement including length, weight, temperature, and volume. Free, fast, and easy to use.",
  keywords:
    "unit converter, measurement converter, length converter, weight converter, temperature converter, volume converter",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AdPlacement position="top" />

          <ConverterCard
            title="Length Converter"
            type="length"
            description="Convert between meters, feet, inches, and more"
          />

          <ConverterCard
            title="Weight Converter"
            type="weight"
            description="Convert between kilograms, pounds, ounces, and more"
          />

          <AdPlacement position="middle" />

          <ConverterCard
            title="Temperature Converter"
            type="temperature"
            description="Convert between Celsius, Fahrenheit, and Kelvin"
          />

          <ConverterCard
            title="Volume Converter"
            type="volume"
            description="Convert between liters, gallons, cups, and more"
          />

          <AdPlacement position="bottom" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
