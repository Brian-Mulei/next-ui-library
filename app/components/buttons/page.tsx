import ComponentDemo from "@/components/ComponentDemo";
import PageLayout from "@/components/PageLayout";

const defaultButtonCode = `
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
  Click Me
</button>
`;

const roundedButtonCode = '   <button type="button" className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">Rounded</button>';

export default function ButtonPage() {
  return (
    <PageLayout
      title="Buttons"
      subtitle="Reusable button components with Tailwind styling"
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <ComponentDemo
        preview={
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Click Me
          </button>
        }
        code={defaultButtonCode}
        heading="Default button"
      />


 <ComponentDemo
        preview={
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Click Me
          </button>
        }
        code={defaultButtonCode}
        heading="Default button"
      />

 <ComponentDemo
        preview={
         <button type="button" className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">Rounded</button>
        }
        code={roundedButtonCode}
        heading="Rounded button"
      />



      </div>
 

    </PageLayout>
  );
}
