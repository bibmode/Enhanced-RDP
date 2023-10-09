import React from "react";
import Article from "../components/Article";
import SideArticle from "../components/SideArticle";
import LayoutContainer from "../components/layout/LayoutContainer";

const DynamicEpsilon = () => {
  return (
    <LayoutContainer>
      <Article
        article1={
          <SideArticle
            image="/images/parallelism-header-image.png"
            imageAlt="parallelism header image"
            caption="Unlocking Enhanced RDP Algorithm Performance with CPU Parallelism"
            link="/cpu-parallelism"
          />
        }
        article2={
          <SideArticle
            image="/images/classic-rdp-header-image.png"
            imageAlt="classic rdp image"
            caption="Simplifying Complexity: Meet the Ramer-Douglas-Peucker Algorithm"
            link="/classic-rdp"
          />
        }
        image="/images/dynamic-epsilon-header-image.png"
        imageAlt="dynamic epsilon image"
        title="Dynamic Epsilon for Enhanced RDP Algorithm: Finding the Perfect Fit"
      >
        <p className="mb-8">
          In the realm of time series data simplification, the
          Ramer-Douglas-Peucker (RDP) algorithm stands as a fundamental tool.
          But there's a key player in the RDP arena that often goes unnoticed –
          the epsilon (ε) parameter. This ε value is the linchpin of the RDP's
          functionality, holding the power to transform the precision of your
          compressed time series. The trade-off is clear: smaller ε values yield
          more accurate but complex results, while larger ε values offer
          simplicity but may overlook essential details.
        </p>

        <p className="mb-8">
          Choosing the right ε is an art, where domain experts often fine-tune
          it based on factors like sensor precision. Yet, the challenge arises
          when dealing with numerous series, each with distinct characteristics
          and data ranges. A uniform ε across the board might not be suitable.
        </p>

        <p className="mb-8 sm:mb-10">
          In this context, the Dynamic Epsilon comes to the rescue. It adjusts ε
          based on your data's unique traits, ensuring that your simplified time
          series retains the essentials. How does it work? It utilizes Median
          Absolute Deviation (MAD), a statistical measure of data variability.
          MAD examines the distances between data points and the approximating
          line, helping the algorithm find the sweet spot.
        </p>

        <div className="bg-indigo-900 text-white py-6 sm:py-9 px-4 sm:px-8 text-sm overflow-x-scroll md:overflow-x-hidden rounded-xl sm:text-base max-w-fit mx-auto">
          <pre>
            <code>
              def calculate_epsilon(data, global_mad):
              <br /> time_interval = 2 data_range = np.max(data) - np.min(data)
              <br /> epsilon = (global_mad + data_range) / 2 * time_interval
              <br /> return epsilon
            </code>
          </pre>
        </div>
        <h4 className="mt-3 mb-8 sm:mb-10 italic font-medium text-center">
          Function for E-RDP's Dynamic Epsilon Calculation
        </h4>

        <p className="mb-8">
          The code above shows the the dynamic epsilon code snippet of the
          parallel RDP algorithm that can adjust the level of simplification
          based on the characteristics of the dataset being simplified was used.
          The dynamic epsilon is calculated by considering both the MAD and the
          range of your data, skillfully balancing the signal and noise. This
          approach offers a tailored ε that adapts to your dataset's specific
          needs.
        </p>
        <p className="mb-20">
          In essence, the Dynamic Epsilon optimizes your time series
          simplification by customizing ε, taking into account the data's
          variability and range, and ensuring that your essential features are
          preserved. It's a valuable addition to the RDP algorithm toolbox,
          offering both precision and flexibility.
        </p>
      </Article>
    </LayoutContainer>
  );
};

export default DynamicEpsilon;
