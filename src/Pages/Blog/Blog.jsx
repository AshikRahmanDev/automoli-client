import React from "react";

const Blog = () => {
  return (
    <div className="w-[90%] mx-auto bg-accent/10 p-2 my-5 ">
      <div className="flex  items-center justify-between h-[84vh]  ">
        <div className="md:w-[40%] mx-auto">
          {/* Question  */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-accent/5  rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What are the different ways to manage a state in a React
              application?
            </div>
            <div className="collapse-content">
              <p>
                Which state management is best in React? React's useState is the
                best option for local state management. If you need a global
                state solution, the most popular ones are Redux, MobX, and the
                built-in Context API. Your choice will depend on the size of
                your project, your needs, and your engineers' expertise.
              </p>
            </div>
          </div>
          {/* Question  */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-accent/5  rounded-box mt-2"
          >
            <div className="collapse-title text-xl font-medium">
              How does prototypical inheritance work?
            </div>
            <div className="collapse-content">
              <p>
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
              </p>
            </div>
          </div>
          {/* Question  */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-accent/5  rounded-box my-2"
          >
            <div className="collapse-title text-xl font-medium">
              What is a unit test? Why should we write unit tests?
            </div>
            <div className="collapse-content">
              <p>
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.
              </p>
            </div>
          </div>
          {/* Question  */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-accent/5  rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              React vs. Angular vs. Vue?
            </div>
            <div className="collapse-content">
              <p>
                Vue provides higher customizability and hence is easier to learn
                than Angular or React. Further, Vue has an overlap with Angular
                and React with respect to their functionality like the use of
                components. Hence, the transition to Vue from either of the two
                is an easy option.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-[600px] hidden md:flex"
            src="https://i.ibb.co/MpFHrX2/pngwing-com.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
