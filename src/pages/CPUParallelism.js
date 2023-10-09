import React from "react";
import SideArticle from "../components/SideArticle";
import Article from "../components/Article";
import CodeBox from "../components/CodeBox";
import LayoutContainer from "../components/layout/LayoutContainer";

const CPUParallelism = () => {
  return (
    <LayoutContainer>
      <Article
        article2={
          <SideArticle
            image="/images/dynamic-epsilon-header-image.png"
            imageAlt="dynamic epsilon image"
            caption="Dynamic Epsilon for Enhanced RDP Algorithm: Finding the Perfect Fit"
            link="/dynamic-epsilon"
          />
        }
        article1={
          <SideArticle
            image="/images/classic-rdp-header-image.png"
            imageAlt="classic rdp image"
            caption="Simplifying Complexity: Meet the Ramer-Douglas-Peucker Algorithm"
            link="/classic-rdp"
          />
        }
        image="/images/parallelism-header-image.png"
        imageAlt="parallelism header image"
        title="Unlocking Enhanced RDP Algorithm Performance with CPU Parallelism"
      >
        {/* text */}

        <p className="mb-8">
          Before we delve into parallelism, it's essential to grasp the RDP
          algorithm's time complexity. The algorithm's runtime, T(n), for a
          polyline with n vertices, can be computationally intensive. In the
          worst-case scenario, it scales with Θ(n^2), and even in the best-case
          situation, it's Θ(n log n). This complexity can pose a challenge,
          particularly when dealing with large polylines or detailed data.
        </p>

        <p className="mb-8">
          To boost the performance of the RDP algorithm, parallelization
          strategies come into play. By harnessing the potential of multi-core
          processors, we aim to keep every thread on different processor cores
          consistently engaged. The idea is to maximize parallel computing while
          minimizing sequential code usage.
        </p>

        <p className="mb-8 sm:mb-10">
          The path to parallelism includes the use of ThreadPoolExecutor, a
          built-in Python class that simplifies the management of thread pools.
          With a thread pool, the RDP algorithm can concurrently evaluate
          various segments of the polyline, thanks to different threads. This
          approach delivers a remarkable speed boost for the RDP algorithm's
          execution time.
        </p>

        <p className="mb-8 sm:mb-10">
          Parallelization also involves chunk sizing – the division of the
          workload into smaller pieces that can be processed simultaneously.
          Finding the perfect chunk size is essential to ensure optimal resource
          utilization and efficient execution.
        </p>

        <CodeBox title="The find_optimal_chunk_size function of the Enhanced RDP algorithm">
          def find_optimal_chunk_size(data):
          <br /> len_data = len(data)
          <br /> if len_data &lt;= 1000:
          <br /> return 4
          <br /> elif len_data &gt; 1000 and len_data &lt;= 10000:
          <br /> return 8
          <br /> elif len_data &gt; 10000 and len_data &lt;= 100000:
          <br /> return 12
          <br /> elif len_data &gt; 100000:
          <br /> return 24
        </CodeBox>

        <p className="mb-8 sm:mb-10">
          The parallel_rdp_algorithm function in Algorithm 3-3 is the heart of
          this parallelization effort. It takes advantage of multi-core CPUs to
          speed up the processing of expansive time-series datasets. This
          function applies the RDP algorithm to a list of data points in
          parallel, making use of ThreadPoolExecutor's capabilities.
        </p>

        <CodeBox title="The parallel_rdp_alorithm function of the Enhanced RDP algorithm">
          def parallel_rdp_algorithm(data: List[List[float]], epsilon: float,
          chunk_size: int = None) -&gt; List[List[float]]:
          <br /> time_interval = 2 data_range = np.max(data) - np.min(data)
          <br /> epsilon = (global_mad + data_range) / 2 * time_interval
          <br /> return epsilon
        </CodeBox>

        <p className="mb-8">
          Classic RDP meets parallelism when the rdp variable, infused with the
          RDP algorithm, is assigned within the ThreadPoolExecutor. Using
          executor.submit(), each chunk of data embarks on an asynchronous
          journey within a separate thread. This method schedules the tasks for
          execution while future objects represent their results.
        </p>

        <CodeBox title="The parallel_rdp function of the Enhanced RDP algorithm">
          def parallel_rdp(points):
          <br /> chunk_epsilon = calculate_chunk_epsilon([p[1] for p in points])
          <br /> future = executor.submit(rdp, points, epsilon=chunk_epsilon)
          <br /> result = future.result()
          <br /> return result
        </CodeBox>

        <p className="mb-8">
          As the threads diligently process their respective data chunks, the
          function awaits their triumphant return. The future.result() method
          ensures that the calling thread stays in sync until all computations
          are complete. With this meticulous orchestration, the results merge
          into a single list, representing the data points elegantly simplified
          by the parallel Ramer-Douglas-Peucker algorithm.
        </p>

        <p className="mb-20">
          In the world of time series data simplification, CPU parallelism is
          the ace up your sleeve, empowering the Enhanced RDP Algorithm to take
          on intricate datasets with finesse and swiftness.
        </p>
      </Article>
    </LayoutContainer>
  );
};

export default CPUParallelism;
