<!--
    We work 2 way for check boxes if its a single value check box then boolean
    is used,
    else when we have multiple choise multiple answers type of thing then
    we use value attribute on each input (type- checkbox) and
    then we use array to maintain which values are checked.
-->
<template>
  <form @submit.prevent="submitHandler">
    <div class="inputPair">
      <label for="q1">Email : </label>
      <input type="email" required v-model="email" id="q1" class="input" />
    </div>

    <div class="inputPair">
      <label for="q2">Password : </label>
      <input type="password" required v-model="psswd" id="q2" class="input" />
      <p v-if="psswdError" class="Error">{{ psswdError }}</p>
    </div>

    <div class="inputPair">
      <label for="q3">Role : </label>
      <select id="q3" v-model="role" class="input">
        <option value="webDeveloper">webDeveloper</option>
        <option value="designer">designer</option>
        <option value="artist">artist</option>
        <option value="vueDeveloper">vueDeveloper</option>
      </select>
    </div>

    <div class="inputPair">
      <label>Skills</label>
      <input
        type="text"
        v-model="tempSkill"
        class="input"
        @keypress="addSkill"
      />
    </div>

    <div class="skills">
      <div
        v-for="skill in skills"
        :key="skill"
        @click="deleteSkill"
        :id="skill"
        class="pill"
      >
        {{ skill }}
      </div>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" id="q4" />
      <label for="q4">Accept Terms and Conditions</label>
    </div>

    <div class="submit">
      <button type="submit">Create an Account</button>
    </div>
  </form>
  {{ email }}
  {{ psswd }}
  {{ role }}
  {{ terms }}
  {{ tempSkill }}
</template>

<script>
export default {
  data() {
    return {
      email: "",
      psswd: "",
      role: "designer",
      terms: false,
      tempSkill: "",
      skills: ["bhavya", "html", "css", "js"],
      psswdError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "Enter") {
        if (this.skills.includes(this.tempSkill.toLowerCase())) {
          alert("Skill already added!");
        } else if (this.tempSkill) {
          this.skills = [...this.skills, this.tempSkill.toLowerCase()];
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(e) {
      this.skills = this.skills.filter((s) => s !== e.target.id);
    },
    submitHandler(e) {
      if (this.psswd.length <= 5) {
        this.psswdError = "Password must be atleast 6 chars long";
        return;
      } else {
        this.psswdError = "";
      }
      if (!this.psswdError) {
        console.log("submitted");
        this.email = "";
        this.psswd = "";
        this.terms = false;
      }
    },
  },
};
</script>
<style>
form {
  background: #ddd;
  width: 60%;
  margin: auto;
  padding: 4rem;
  padding-bottom: 1rem;
}
.inputPair {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
}
.input {
  width: 50%;
  border-radius: 1rem;
  border: none;
  max-height: 1.6rem;
  padding: 3px 10px;
  background-color: #eef;
}
.pill {
  display: inline-block;
  background-color: pink;
  padding: 5px 5px;
  border-radius: 1rem;
  cursor: default;
}
.terms {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}
.skills {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.Error {
  color: red;
  margin-top: 0;
  font-size: 0.8rem;
  margin-bottom: 0;
}
button {
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background: #48cae4;
  color: white;
}
</style>