```javascript
// pages/about.js
import dynamic from 'next/dynamic';

const Data = dynamic(() => import('./data.json'), { ssr: false });

export default async function About() {
  const data = await Data();
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. Data: {JSON.stringify(data)}</p>
    </div>
  );
}
```
```json
// data.json
{
  "message": "Data from data.json"
}
```