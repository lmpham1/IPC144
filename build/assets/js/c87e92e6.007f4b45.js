(self.webpackChunkipc_144=self.webpackChunkipc_144||[]).push([[1674],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9745:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i=["components"],s={},c="Computers",l={unversionedId:"A-Introduction/computers",id:"A-Introduction/computers",isDocsHomePage:!1,title:"Computers",description:"Learning Outcomes",source:"@site/docs/A-Introduction/computers.md",sourceDirName:"A-Introduction",slug:"/A-Introduction/computers",permalink:"/IPC144/docs/A-Introduction/computers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/A-Introduction/computers.md",version:"current",frontMatter:{},sidebar:"courseNotesSidebar",previous:{title:"Compilers",permalink:"/IPC144/docs/A-Introduction/compilers"},next:{title:"Information",permalink:"/IPC144/docs/A-Introduction/information"}},u=[{value:"Learning Outcomes",id:"learning-outcomes",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Hardware",id:"hardware",children:[{value:"Modern Computers",id:"modern-computers",children:[]},{value:"Primary Memory",id:"primary-memory",children:[]},{value:"Central Processing Unit",id:"central-processing-unit",children:[]},{value:"Devices",id:"devices",children:[]},{value:"Memory Comparison",id:"memory-comparison",children:[]}]},{value:"Software",id:"software",children:[]},{value:"Outline",id:"outline",children:[{value:"Optional Sections",id:"optional-sections",children:[]}]}],p={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"computers"},"Computers"),(0,a.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,a.kt)("p",null,"After reading this section, you will be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Describe the major components of a modern computer"),(0,a.kt)("li",{parentName:"ul"},"Describe the software that controls a modern computer"),(0,a.kt)("li",{parentName:"ul"},"Outline the contents of these notes")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Computers are available in many flavours: mobile devices, smart phones, laptops, tablets, desktops, workstations and servers to name a few. All of these devices control their operations through software. Programmers create this software. Users rely on this software to operate their devices."),(0,a.kt)("p",null,"We refer to the software with which a user operates their device as application software. Application software consists of one or more programs. Each program is a full set of instructions that performs a well-defined task on the host device. Programmers code these instructions in a programming language."),(0,a.kt)("p",null,"The instructions that programmers code represent algorithms. An algorithm is a step-by-step procedure that describes how to achieve a specified task. Examples include searching, sorting and mixing. Application programmers study different algorithms and create their own if required. They find the code for some algorithms in libraries and write the code for their own algorithms."),(0,a.kt)("p",null,"This introductory chapter describes the major components of a modern computer, components to which programmers often refer. Subsequent chapters show how to write programs to use the principal features of these components efficiently."),(0,a.kt)("h2",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,"The figure below illustrates the relation of the programmer to a user of a software application. The boxes identify the principal elements for any programmer. The green boxes identify the elements of concern to the user."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/programmer.png",alt:null})),(0,a.kt)("p",null,"Computer hardware stores the program instructions in its own memory, accepts input from the user, processes that input according to the stored instructions, and generates the output for the user. The user can rerun the program to process different inputs and produce corresponding outputs."),(0,a.kt)("h3",{id:"modern-computers"},"Modern Computers"),(0,a.kt)("p",null,"In 1945, John von Neumann, noting that instructions are pieces of information just like data, proposed a new computer architecture, in which instructions and data are stored alongside one another. We call this idea the stored-program concept. All modern computers are stored-program computers."),(0,a.kt)("p",null,"The figure below shows the components of a stored-program computer. They include a central processing unit ","(","CPU",")",", a clock, primary memory and a set of devices. Buses interconnect these components and are part of the motherboard. The CPU, primary memory and a clock are also part of the motherboard. The clock controls the rate at which the CPU executes the instructions."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/hardware.png",alt:null})),(0,a.kt)("h3",{id:"primary-memory"},"Primary Memory"),(0,a.kt)("p",null,"Primary memory is memory directly accessible by the CPU. Primary memory includes read-only memory ","(","ROM",")",", random-access memory ","(","RAM",")"," and memory within the CPU itself."),(0,a.kt)("p",null,"ROM holds the instructions for starting the system. ROM is not volatile: it persists if we turn off power."),(0,a.kt)("p",null,"RAM holds the program instructions and the program data. RAM is volatile: its contents are lost if we turn off power."),(0,a.kt)("h3",{id:"central-processing-unit"},"Central Processing Unit"),(0,a.kt)("p",null,"The CPU is the work-horse of any modern computer. The CPU executes program instructions serially ","(","one at a time",")",". A modern CPU consists of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"registers"),(0,a.kt)("li",{parentName:"ul"},"a decode unit"),(0,a.kt)("li",{parentName:"ul"},"a control unit ","(","CU",")"),(0,a.kt)("li",{parentName:"ul"},"an arithmetic and logic unit ","(","ALU",")"),(0,a.kt)("li",{parentName:"ul"},"a floating-point accelerator ","(","FPA",")")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/cpu.png",alt:null})),(0,a.kt)("p",null,"Registers are the CPU's internal memory. They hold the data used by the ALU and FPA and any new data that the ALU and FPA produce. Register data is volatile: we lose the contents of each register as soon as we turn off power."),(0,a.kt)("p",null,"The Decode unit extracts each incoming instruction from the instruction queue and decodes that instruction. The CU moves data between registers, RAM and the devices, and passes the decoded instruction to the ALU or the FPA for processing. The CU manages the data, but does not change it."),(0,a.kt)("p",null,"The ALU performs the comparisons and integer calculations, changes the data and creates new data as directed by the CU. The FPA performs the calculations on floating-point data. The ALU and FPA work solely with register memory inside the CPU."),(0,a.kt)("h3",{id:"devices"},"Devices"),(0,a.kt)("p",null,"The devices of a modern computer include peripheral and other devices. Peripheral devices include a keyboard, a mouse, and a monitor, which provide user interfaces for input and output. Hard drives, USB keys and DVD/CD-ROMs constitute secondary memory, which provides persistent storage of program instructions and program data."),(0,a.kt)("h3",{id:"memory-comparison"},"Memory Comparison"),(0,a.kt)("p",null,"Secondary memory is inexpensive compared to primary memory, but considerably slower. Compare the following data transfer rates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Registers ~10 nanoseconds"),(0,a.kt)("li",{parentName:"ul"},"ROM and RAM ~60 nanoseconds"),(0,a.kt)("li",{parentName:"ul"},"Hard disk ~12,000,000 nanoseconds")),(0,a.kt)("p",null,"A nanosecond is 10-9 seconds. To appreciate the differences, consider the following analogy. The ratio of the time that the CPU takes to transfer data between registers to the time that a hard disk takes to transfer that same information is the ratio of the width of an average-sized room to the distance once around the earth along the equator."),(0,a.kt)("h2",{id:"software"},"Software"),(0,a.kt)("p",null,"The software that controls a modern computer includes the programs that are currently executing and the operating system that manages them. The operating system is a program that executes as long as power in on. The operating system resides in RAM along with the other currently executing programs."),(0,a.kt)("p",null,"When a user starts an application program, the operating system loads that program's instructions into part of RAM and transfers control to the program. The program starts executing, requests data from the user, sends output to the user, and eventually terminates its own execution and returns control to the operating system."),(0,a.kt)("p",null,"An application program transforms raw data from the user ","(","the input",")"," into equivalent data stored in RAM, operates on the data in RAM and transforms the resultant data into some user-readable form ","(","the output",")",". Programming languages define how internal data is stored in RAM."),(0,a.kt)("p",null,"As application developers, we focus on input and output processing and transformation of input data into output data. The figure below relates this focus to the software that we code."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/software.png",alt:null})),(0,a.kt)("h2",{id:"outline"},"Outline"),(0,a.kt)("p",null,"These notes introduce the fundamental concepts of software development. The chapters are grouped into six parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Introduction"),(0,a.kt)("li",{parentName:"ol"},"Computations"),(0,a.kt)("li",{parentName:"ol"},"Data Structures"),(0,a.kt)("li",{parentName:"ol"},"Modularity"),(0,a.kt)("li",{parentName:"ol"},"Secondary Storage"),(0,a.kt)("li",{parentName:"ol"},"Refinements")),(0,a.kt)("p",null,"The introductory part describes modern computers, the storage of information in memory, and how to create your first program."),(0,a.kt)("p",null,"The computations part introduces the concept of type and shows how to describe program variables using types, show how to handle basic input and output, how to calculate a new value from existing values, how to create optional paths through a program, how to write code in a friendly readable style, and how to test and debug sets of program instructions, including how to determine the output produced by those instructions."),(0,a.kt)("p",null,"The data structures part describes how to organize groups of values into data types in memory. This part introduces the grouping concepts of arrays and structures."),(0,a.kt)("p",null,"The modules part describes how to organize program instructions into self-contained cohesive units, called functions, where each function implements a single algorithm. This part shows how to divide a program into independent modules and how to pass information from one module to another."),(0,a.kt)("p",null,"The secondary storage part describes how to move text data between an installed device and RAM. This part introduces files and describes the syntax for working with secondary memory."),(0,a.kt)("p",null,"The refinements part elaborates on concepts introduced in the other parts. It covers character strings as specialized versions of arrays and shows how to work with the library functions that handle them. This part describes the relation between pointers and arrays, including arrays of structures. This part also covers two-dimensional arrays and shows how to store tabular data using strings. This part concludes with introductions to some of the standard algorithms and the guidelines for portability of program code."),(0,a.kt)("h3",{id:"optional-sections"},"Optional Sections"),(0,a.kt)("p",null,"Some chapters include sections or sub-sections marked optional. These sections contain information that elaborates specific details related to the topic covered in these notes. Feel free to skip these sections on first reading, without disrupting presentation flow. Subsequent mandatory sections do not rely on any information covered in these optional sections. These optional sections simply add depth to the material."))}d.isMDXComponent=!0}}]);