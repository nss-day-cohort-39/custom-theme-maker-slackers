export const BorderButtons = () => {
  return `
  <article class="borderSizes">
    <fieldset>
    <legend>Border Sizes</legend>

    <div class="flexVertical">
      <label for="onepixel" class="pixelsRadios">1px
        <input type="radio" name="pixelsize" value="onepixel" />
      </label>

      <label for="threepixels" class="pixelsRadios">3px
        <input type="radio" name="pixelsize" value="threepixels" />
      </label>

      <label for="fivepixels" class="pixelsRadios">5px
        <input type="radio" name="pixelsize" value="fivepixels" />
      </label>

    </div>
    </fieldset>
  </article>
  `
}
