<template>
  <form>
    <div class="inputPair">
      <label for="q1">Email : </label>
      <input type="email" required v-model="email" id="q1" class="input" />
    </div>
    <div class="inputPair">
      <label for="q2">Password : </label>
      <input type="password" required v-model="psswd" id="q2" class="input" />
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
    <div>
      <input type="checkbox" required v-model="terms" id="q4" />
      <label for="q4">Accept Terms and Conditions</label>
    </div>
    <!--
        We work 2 way for check boxes if its a single value check box then boolean
        is used,
        else when we have multiple choise multiple answers type of thing then
        we use value attribute on each input (type- checkbox) and
        then we use array to maintain which values are checked.
    -->
    <!-- <div>
      <input type="checkbox" v-model="names" value="bhavya" />
      <label>bhavya</label>
      <input type="checkbox" v-model="names" value="utkris" />
      <label>utkris</label>
      <input type="checkbox" v-model="names" value="kb" />
      <label>kb</label>
      <input type="checkbox" v-model="names" value="abisek" />
      <label>abisek</label>
    </div> -->
  </form>
  {{ email }}
  {{ psswd }}
  {{ role }}
  {{ terms }}
  <!-- <ul>
    <li v-for="n in names" :key="n">
      {{ n }}
    </li>
  </ul> -->
  {{ tempSkill }}
  <!-- {{ skills }} -->
  <ul>
    <li v-for="skill in skills" :key="skill" @click="deleteSkill" :id="skill">
      {{ skill }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      psswd: "",
      role: "designer",
      terms: false,
      //   names: [],
      tempSkill: "",
      skills: ["bhavya", "html", "css", "js"],
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
  },
};
</script>
<style>
form {
  background: #ddd;
  width: 60%;
  margin: auto;
  padding: 4rem;
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
</style>