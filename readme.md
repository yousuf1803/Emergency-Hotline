#️⃣Question-01: What is the difference between getElementById, getElementsByClassName and querySelector/querySelectorAll?

✨Answer: 
Javascript এর Document Object Model এ getElementById(), getElementsByClassName(), querySelector(), querySelectorAll() মেথডগুলো প্রত্যেকে আলাদা আলাদা কাজ করে থাকে।
নিচে বিস্তারিত আলোচনা করা হলঃ

⏺️getElementById(): এই মেথড ব্যাবহার করে আমরা DOM থেকে একটি নির্দিষ্ট Id যুক্ত  element কে পেতে পারি। Documentএ ঐ নামে কোন Id না থাকলে সেক্ষেত্রে এটি null return করবে। এই মেথড ব্যাবহার করে আমরা নির্দিষ্ট Id যুক্ত element এর উপর বিভিন্ন ধরনের DOM Manipualation এর কাজ করতে পারি। যেমন ঃ Event Handler যোগ করা, Inner HTML, Inner Text পরিবর্তন করা, style পরিবর্তন করা, attribute পরিবর্তন করা ইত্যাদি । 

⏺️getElementsByClassName() : এই মেথড ব্যাবহার করে আমরা DOM থেকে একই class যুক্ত element গুলোকে পেতে পারি। এই মেথডটি একটি Live HTML collection return করে যা অনেকটা array like object এর মতো কাজ করে। Documentএ ঐ নামে কোন class না থাকলে সেক্ষেত্রে এটি একটি empty array [] return করবে। এই মেথড ব্যাবহার করে আমরা একই class যুক্ত element গুলোর উপর একসাথে বিভিন্ন ধরনের DOM Manipualation এর কাজ করতে পারি। যেমন ঃ Event Handler যোগ করা, Inner HTML, Inner Text পরিবর্তন করা, style পরিবর্তন করা, attribute পরিবর্তন করা, for loop পরিচালনা করা ইত্যাদি । Index no. ব্যাবহার করে আমরা কোন একটি নির্দিষ্ট element কে access করতে পারি ।

⏺️querySelector(): এই মেথড ব্যাবহার করে আমরা DOM থেকে css selector ব্যাবহার করে  একটি নির্দিষ্ট Id বা একই class যুক্ত  element গুলোর শুধুমাত্র প্রথম উপাদান কে পেতে পারি। Documentএ ঐ নামে কোন Id বা class না থাকলে সেক্ষেত্রে এটি null return করবে।

⏺️querySelectorAll() : এই মেথডের মাধ্যমে  আমরা css selector ব্যাবহার করে DOM থেকে specified element গুলোকে একসাথে  পেতে পারি। এই মেথডটি একটি static Nodelist return করে যা specified css selector এর সাথে match করে এমন সকল element কে contain করে এবং অনেকটা array like object এর মতো কাজ করে।যার উপর   for eatch() বা for of loop method  apply করা যায় । Documentএ ঐ specified css selector এর সাথে match করে এমন কোন element না থাকলে সেক্ষেত্রে এটি একটি empty array [] return করবে। Index no. ব্যাবহার করে আমরা কোন একটি নির্দিষ্ট element কে access  করতে পারি । আমরা group of selectors ব্যাবহার করে tagnames, id, class, attributes এর ভিত্তিতে highly specific element সমূহ পেতে পারি।


#️⃣Question-02:How do you create and insert a new element into the DOM?
✨Answer:


Following steps described below we can create and insert a new element into the DOM:

1.Firstly, We have to get a parent Node/parent element where newly create  element is inserted.By using document.getElementById() we can do that.
Example: const parentDiv=document.getElementById('id');

2.Then we should create a element by using document.createElement("element name")
Example: const childDiv=document.createElement("div");

3.Then set Inner Text or Inner HTML to the newly create element.
Example: childDiv.innerHTML=`<p>This is a new div</p>` ;

4.Append newly create element to the parent using appendChild() method.
Example: parentDiv.appendChild(childDiv) ;


#️⃣Question-03: What is Event Bubbling and how does it work?
✨Answer:


ওয়েবপেইজের কোথাও কোনো Event সংগঠিত হলে browser বুঝতে পারেনা  ওয়েবপেইজের কোন জায়গায় Event সংঘটিত হয়েছে।তখন সে পুরো Document  এর Parentnode এর কাছে যায়।সেখানে কোনো eventListener add করা  আছে কিনা দেখে। কোনো   eventListener add করা থাকলে সে তাৎক্ষণিক event trigger না করে সেটাকে capture করে।তারপর তার child এর কাছে যায়,  তারপর তার child এর কাছে যায় এবং প্রতিবারই উপরোক্ত ঘটনা ঘটে।এভাবে করতে করতে পর্যায়ক্রমে সে উপর থেকে নীচে যেতে থাকে।
এইটাকে বলা হয় Capturing Phase.

Capturing Phase শেষে যখন সে target এ  অর্থাৎ ওয়েব পেইজের যেখানে Event সংগঠিত হয়েছে সেখানে পৌছায় তখন প্রথমে target এ add করা Eventটি  triggered হয়।
একে বলা হয় Target Phase.

এরপর সে  bubble করে  উপরের দিকে উঠে  এবং তার parent এর কাছে যায়।সেখানে কোনো event add করা থাকলে সেটাকে trigger করে। এভাবে bubbling করতে করতে সে উপরের দিকে যেতে থাকে এবং প্রতিবারই উপরোক্ত ঘটনা ঘটে।
এটাকে বলা হয়  Bubbling Phase.

আর পুরো প্রক্রিয়াটিকে বলা হয় Event Bubbling.


#️⃣Question-04: What is Event Delegation in JavaScript? Why is it useful?
✨Answer:
  

Javascript এ  কোনো একটি ParentNode বা Parentelement এর প্রত্যেকটি Child এ আলাদা আলাদা ভাবে eventListener add না করে শুধুমাত্র  এদের Parent এ eventListener add করার  প্রকিয়াকে Event Delegation বলা হয়।

Javascript এ Event Delegation খুবই উপকারী একটি প্রক্রিয়া।কারণ,একটি ParentNode এর প্রত্যেক element এ আলাদা আলাদা ভাবে eventListener add করা খুবই কষ্টসাধ্য এবং এতে Document এর সাইজ যেমন এর বড় হয়ে যায় তেমনি file টিও ভারী হয়ে যায়।ফলে ওয়েবপেইজ  লোড হতে সময় বেশি লাগতে পারে।এর একটি সুন্দর সমাধান হলো Event Delegation।অর্থাৎ Parent element এ EventListener add করা।এটি এমন একটি প্রক্রিয়া যেখানে event টি child element এ সংগটিত হলেও  Parent element সেই event টিকে handle করে।

এই প্রক্রিয়া যেভাবে কাজ করে:
আমরা জানি,কোনো একটি targetএ eventListener add করলে সেটি triggered হওয়ার পর Event bubbling প্রক্রিয়ায় তার parent এর কাছে যায় এবং সেখানে কোনো eventListener add করা থাকলে সেটাকেও trigger করে।এখন একটি parent element এর সবগুলো  child elemnt এ আলাদা আলাদা eventListener add না করে শুধুমাত্র parent elementএ add  করলে ওয়েবপেইজের যেকোন elementএ  event সংঘটিত হলে সেটি Event bubbling প্রক্রিয়ায় তার parent এর কাছে যায়। এরপর event.target এর মাধ্যমে parent element এর  ভিতর থেকে আমরা চিহ্নিত করি কোন child element event ঘটেছে।তারপর সেই অনুযায়ী কাজ করি।

Event Delegation এর সুবিধা:
১) প্রত্যেক child element এ আলাদা আলাদা eventListener add করতে হয় না।
২)Parent element এ নতুন কোনো element যোগ করলে আলাদা করে eventListener add করতে হয় না।
৩)DOM এর উপর চাপ কমে।
৪)কম  কোড লিখতে হয় এবং কোড maintainance সহজ হয়।


#️⃣Question-05: What is the difference between preventDefault() and stopPropagation() methods?
✨Answer:

Javascript DOM Manipulation এ preventDefault() এবং stopPropagation() মেথড দুইটিই event এর সাথে কাজ করে।তবে তাদের মধ্যে ভিন্নতা আছে এবং তারা প্রত্যেকে আলাদা আলাদা কাজ করে থাকে।
নীচে তা বর্ননা করা হলো:

PreventDefault() মেথড:

PreventDefault হলো Javascript DOM এর এমন একটি মেথড যার মাধ্যমে browser এর Default behaviour control করা যায়।যেমন : form element  এর মধ্যে কোনো বাটনে click event  সংগটিত হলে  auto submit হয়ে যায় এবং পুরো ওয়েবপেইজ রিলোড হয়ে যায়।এই default behavior control করার জন্য event এ preventDefault() মেথডটি ব্যবহার করতে হয়।যেমন:event.preventDefault()

stopPropagation() মেথড:

stopPropagation হলো Javascript DOM এর Event Bubbling সাথে সম্পৃক্ত একটি মেথড।এটি Event bubbling বা capturing বন্ধ করে।
আমরা জানি,Event Bubbling প্রক্রিয়ায় target element এ event triggered হওয়ার পর পর্যায়ক্রমে উপরের দিকে যেতে থাকে এবং parentএ কোনো eventListener add করা থাকলে সেটাকেও trigger করে।যেটাকে Propagation বলা হয়।আমি যদি চাই,শুধুমাত্র target element এ থাকা event টি trigger হবে এবং Propagate করে উপরের দিকে যাবে না তখন stopPropagation মেথডটি ব্যবহৃত হয়।কোনো একটি target element এ Propagation stop করতে চাইলে সেই event টিতে event.stopPropagation() মেথডটি সেট করতে হয়।









