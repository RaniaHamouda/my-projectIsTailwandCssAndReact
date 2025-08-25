

export default function FeatureBox({ title, icon, desc }) {
  return (
    // لازم نعمل امبورت للصوره علشان تشتغل كويس بدون مشاكل
    <div className="flex justify-center items-center flex-col "> 
    <img 
    src={new URL(`../assets/images/${icon}`, import.meta.url).href} 
    alt="icon-img"
    className="w-[80px] h-[80px] object-contain "
  />


         <h4 className="text-xl font-semibold my-[15px]">{title}</h4>

         <p className="font-normal text-sm text-center" >{desc}</p>
    </div>
  );
}
