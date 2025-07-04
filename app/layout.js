import './globals.css';

export const metadata = {
  title: 'Shubham Jangle - Robotics Portfolio',
  description: 'Personal portfolio showcasing robotics projects and research',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
