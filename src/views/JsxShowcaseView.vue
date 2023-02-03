<script lang="tsx">
import { defineComponent, ref, Ref } from "vue";

interface PopUpProps {
  success: Ref<boolean>;
}

const PopUp = ({ success }: PopUpProps) => {
  return (
    <div class="popup">
      {success.value ? <div>There is hope</div> : <div>Congrats, you suck</div>}
    </div>
  );
};

export default defineComponent({
  setup() {
    const success = ref<boolean>(false);
    const resultShown = ref<boolean>(false);

    const showResult = (v: boolean) => {
      resultShown.value = v;
    };

    return () => (
      <div>
        <div>Personality test: Are you a despicable human being?</div>
        <br />
        <fieldset>
          <span>Would you ever use JSX/TSX in a Vue project?</span>
          <br />
          <br />
          <input
            type="radio"
            id="yes"
            name="success"
            onClick={() => {
              success.value = true;
            }}
          />
          <label for="yes">Yes</label>

          <input
            type="radio"
            id="no"
            name="success"
            onClick={() => {
              success.value = false;
            }}
          />
          <label for="no">No</label>
          <br />
          <br />
        </fieldset>
        <div>
          <button type="button" onClick={() => showResult(true)}>
            Show results
          </button>
        </div>
        {resultShown.value && <PopUp success={success} />}
      </div>
    );
  },
});
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
}
</style>
