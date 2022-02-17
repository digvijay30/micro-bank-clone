<template>
  <!-- start summary -->
  <!-- layer 1 -->
  <div class="summary">
    <!-- layer 2 -->
    <!-- start summary menu -->
    <div class="summary-menu">
      <div
        class="tab"
        :class="{ 'active-menu': isSummaryActive }"
        @click="togglePage('summary')"
      >
        Summary
      </div>
      <div
        class="tab"
        :class="{ 'active-menu': !isSummaryActive }"
        @click="togglePage('details')"
      >
        Details
      </div>
    </div>
    <!-- end summary menu -->
    <!-- start account summary -->
    <!-- layer 3 -->
    <div class="balance" v-if="isSummaryActive">
      <div class="account-summary">
        <div class="account-details">
          <h3>Summary</h3>
          <div class="section-first">
            <div class="col-section">
              <p>Account Number</p>
              <div>67238744</div>
            </div>
            <div class="col-section">
              <p>Income</p>
              <div>$20,00,000</div>
            </div>
            <div class="col-section">
              <p>Spends</p>
              <div>$11,00,000</div>
            </div>
          </div>
        </div>
      </div>
      <!-- end account summary -->
      <!--  start tag line -->
      <!-- layer 4 -->
      <div class="tag-line">
        <h3>Services</h3>
        <p>Micro bank services for you</p>
      </div>
      <!-- end tag line -->

      <!-- start current services -->
      <div class="services">
        <h3>Current Services</h3>
        <div class="features-icon">
          <div class="feature-flex">
            <div><img src="../../../assets/home.jpg" alt="home" /></div>
            <div class="title">Current Account</div>
            <div><star-rating :rating="0" @rating-selected="setRating($event,'Account')" :active-color="['#098b1f']" :active-border-color="['#098b1f']" inactive-color="#fff"  :border-width="3" :active-on-click="true" :show-rating="false" :star-size="14"></star-rating></div>
          </div>
          <div class="feature-flex">
            <div><img src="../../../assets/payroll.jpg" alt="home" /></div>
            <div class="title">Payroll</div>
            <div><star-rating :rating="0" @rating-selected="setRating($event,'Payroll')" :active-color="['#098b1f']" :active-border-color="['#098b1f']" inactive-color="#fff"  :border-width="3" :active-on-click="true" :show-rating="false" :star-size="14"></star-rating></div>
          </div>
          <div class="feature-flex">
            <div><img src="../../../assets/payment.jpg" alt="home" /></div>
            <div class="title">Payments</div>
            <div><star-rating :rating="0" @rating-selected="setRating($event,'Payment')" :active-color="['#098b1f']" :active-border-color="['#098b1f']" inactive-color="#fff"  :border-width="3" :active-on-click="true" :show-rating="false" :star-size="14"></star-rating></div>
          </div>
        </div>
      </div>
      <!-- end current services -->

      <!-- start available services -->
      <div class="services extra-space">
        <h3>Available Services</h3>
        <div class="features-icon">
          <div class="feature-flex">
            <div><img src="../../../assets/wallet.jpg" alt="home" /></div>
            <div class="title">Wallet</div>
          </div>
          <div class="feature-flex">
            <div><img src="../../../assets/graph.jpg" alt="home" /></div>
            <div class="title">Investments</div>
          </div>
          <div class="feature-flex">
            <div><img src="../../../assets/tax.jpg" alt="home" /></div>
            <div class="title">Tax Payment</div>
          </div>
          <div class="feature-flex">
            <div><img src="../../../assets/payment.jpg" alt="home" /></div>
            <div class="title">Loans</div>
          </div>
        </div>
      </div>
      <!-- end available services -->
    </div>
    <div class="table" v-else>
      <div class="details-table">
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="top">
              <td>2011002039111</td>
              <td>22-09-2021</td>
              <td>1,780</td>
              <td class="success">Approved</td>
              <td>
                <div class="actions">
                  <div class="view"><i class="fas fa-eye"></i></div>
                  <div class="download"><i class="fas fa-download"></i></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>2011002039111</td>
              <td>22-09-2021</td>
              <td>1,780</td>
              <td class="success">Approved</td>
              <td>
                <div class="actions">
                  <div class="view"><i class="fas fa-eye"></i></div>
                  <div class="download"><i class="fas fa-download"></i></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>2011002039111</td>
              <td>22-09-2021</td>
              <td>1,780</td>
              <td class="reject">Rejected</td>
              <td>
                <div class="actions">
                  <div class="view"><i class="fas fa-eye"></i></div>
                  <div class="download"><i class="fas fa-download"></i></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>2011002039111</td>
              <td>22-09-2021</td>
              <td>1,780</td>
              <td class="success">Approved</td>
              <td>
                <div class="actions">
                  <div class="view"><i class="fas fa-eye"></i></div>
                  <div class="download"><i class="fas fa-download"></i></div>
                </div>
              </td>
            </tr>
            <tr class="bottom">
              <td>2011002039111</td>
              <td>22-09-2021</td>
              <td>1,780</td>
              <td class="reject">Rejected</td>
              <td>
                <div class="actions">
                  <div class="view"><i class="fas fa-eye"></i></div>
                  <div class="download"><i class="fas fa-download"></i></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- end summary -->
</template>

<script>
import StarRating from 'vue-star-rating';
export default {
  components:{
   StarRating
  },
  name: "Summary",
  data: () => {
    return {
      isSummaryActive: true,
      ratings:{'Account':0,'Payroll':0,'Payment':0}
    };
  },
  methods: {
    togglePage(param) {
      if (param == "details") {
        this.isSummaryActive = false;
      } else {
        this.isSummaryActive = true;
      }
    },
     setRating: function(rating,param) {
      this.ratings[param] = rating;
      console.log(this.ratings);
    },
  },
};
</script>

<style>
@import "../../../assets/styles/Summary.css";
@import "../../../assets/styles/responsive/summary-responsive.css";
</style>
